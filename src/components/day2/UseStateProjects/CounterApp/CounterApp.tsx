import { useState } from 'react';
import './Counter.css';

export const CounterApp = () => {
    const [counter, setCounter] = useState(0);

    const increaseHandler = () => setCounter((prevValue) => prevValue + 1);

    const decreaseHandler = () => {
        if (counter <= 0) {
            return;
        }
        setCounter((prevValue) => prevValue - 1);
    }

    const resetHandler = () => setCounter(0);

    return (

        <section className="counter-card">
            <div className="counter-header">
                <span className="badge">React useState</span>
                <h2>Modern Counter</h2>
                <p>Practice state updates with a clean interactive counter UI.</p>
            </div>

            <div className="counter-display">
                <span className="counter-value">{counter}</span>
                <p className="counter-label">Current value</p>
            </div>

            <div className="counter-actions">
                <button className="action-button accent" onClick={increaseHandler}>Increase</button>
                <button className="action-button" onClick={decreaseHandler} disabled={counter <= 0}>Decrease</button>
                <button className="action-button secondary" onClick={resetHandler}>Reset</button>
            </div>
        </section>
    )
}
