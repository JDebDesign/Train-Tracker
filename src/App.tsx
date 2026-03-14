import { ActionButtons } from "./components/ActionButtons";
import { CounterDisplay } from "./components/CounterDisplay";
import { PreviousEntries } from "./components/PreviousEntries";
import { ResetGroup } from "./components/ResetGroup";
import { usePassengerCounter } from "./hooks/usePassengerCounter";

export default function App() {
    const { count, entriesText, increment, save, reset } = usePassengerCounter();

    return (
        <div id="container">
            <div id="overlay">
                <h4>Train Tracker</h4>
                <CounterDisplay count={count} />
                <div id="verticalButtonGroup">
                    <ActionButtons onIncrement={increment} onSave={save} />
                    <ResetGroup onReset={reset} />
                </div>
                <PreviousEntries entriesText={entriesText} />
            </div>
        </div>
    );
}
