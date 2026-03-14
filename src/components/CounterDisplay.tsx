type CounterDisplayProps = {
    count: number;
};

export function CounterDisplay({ count }: CounterDisplayProps) {
    return (
        <>
            <h1>People entered</h1>
            <h2 id="count-el">{count}</h2>
        </>
    );
}
