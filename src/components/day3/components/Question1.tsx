// Task 1: Ek button banao jiske click hone par screen par ek message badle aur counter increment ho.
// onClick Practise

import { useState } from "react"

export const Question1 = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={() => setCount((prev) => prev + 1)}>Increase</button>
        </div>
    )
}
