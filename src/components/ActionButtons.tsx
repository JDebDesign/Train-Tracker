type ActionButtonsProps = {
    onIncrement: () => void;
    onSave: () => void;
};

export function ActionButtons({ onIncrement, onSave }: ActionButtonsProps) {
    return (
        <div id="horizontalButtonGroup">
            <button id="increment-btn" onClick={onIncrement}>
                INCREMENT
            </button>
            <button id="save-btn" onClick={onSave}>
                SAVE
            </button>
        </div>
    );
}
