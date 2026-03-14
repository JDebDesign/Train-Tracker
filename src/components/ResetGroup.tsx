type ResetGroupProps = {
    onReset: () => void;
};

export function ResetGroup({ onReset }: ResetGroupProps) {
    return (
        <div id="resetGroup">
            <p>Done working for the day?</p>
            <button id="reset-btn" onClick={onReset}>
                RESET
            </button>
        </div>
    );
}
