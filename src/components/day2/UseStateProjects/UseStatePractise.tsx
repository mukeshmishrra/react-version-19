import './UseStatePractise.css';
import { CounterApp } from './CounterApp/CounterApp';
import { FeedbackApp } from './BasicForm-useState/FeedbackApp';

export const UseStatePractise = () => {
   
    return (
        <>
        
       < CounterApp/>
       <br /> <br />
       < FeedbackApp/>
        <br /> <br />
       </>
    );
}

// CONCEPT
// write UseState notes in short point to point for better understanding and practise.
// 1. useState is a React hook that allows you to add state to functional components.
// 2. It returns an array with two elements: the current state value and a function to update it.
// 3. You can use useState to manage any type of state, including strings, numbers, objects, and arrays.
// 4. When you call the state update function, React will re-render the component with the new state value.
// 5. You can use multiple useState hooks in a single component to manage different pieces of state.
// 6. The initial state value can be set by passing an argument to the useState function.
// 7. syntax: const [state, setState] = useState(initialState);
// 8. Example: const [count, setCount] = useState(0); // count is the state variable, setCount is the function to update it, and 0 is the initial value.
// 9. best practice: useState should be used for local component state,
//  while useReducer or context API can be used for more complex state management across multiple components.
// 10 when to not useState:
// - When you need to manage complex state logic that involves multiple sub-values
// or when the next state depends on the previous one, consider using useReducer instead.
// - When you need to share state between multiple components, consider using context API
// or a state management library like Redux or MobX.

// Real scenario based practise
// Example1. Create a counter component that increments and decrements a number using useState.
// Example2. Create a form component that uses useState to manage the input values and submit the form data.
// Example3. Create a toggle button component that uses useState to switch between two states (e.g., on/off, show/hide).
// Example4. Create a list component that uses useState to add and remove items from an array.
// Example5. Create a theme switcher component that uses useState to toggle between light and dark modes.