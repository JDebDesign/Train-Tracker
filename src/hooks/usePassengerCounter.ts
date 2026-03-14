import { useCallback, useMemo, useState } from "react";

export type PassengerCounterState = {
    count: number;
    entriesText: string;
    increment: () => void;
    save: () => void;
    reset: () => void;
};

export function usePassengerCounter(): PassengerCounterState {
    const [count, setCount] = useState<number>(0);
    const [entries, setEntries] = useState<number[]>([]);

    const increment = useCallback(() => {
        setCount((currentCount) => currentCount + 1);
    }, []);

    const save = useCallback(() => {
        setEntries((currentEntries) => [...currentEntries, count]);
        setCount(0);
    }, [count]);

    const reset = useCallback(() => {
        setCount(0);
        setEntries([]);
    }, []);

    const entriesText = useMemo(() => {
        if (entries.length === 0) {
            return "Previous entries: ";
        }

        return `Previous entries: ${entries.join(" - ")} - `;
    }, [entries]);

    return { count, entriesText, increment, save, reset };
}
