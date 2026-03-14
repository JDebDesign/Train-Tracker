type PreviousEntriesProps = {
    entriesText: string;
};

export function PreviousEntries({ entriesText }: PreviousEntriesProps) {
    return (
        <p id="save-el" className="truncate">
            {entriesText}
        </p>
    );
}
