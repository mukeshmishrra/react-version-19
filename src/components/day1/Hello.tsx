import {Card} from './Card'

export const Hello = () => {
     const username:string = "Ashi";
     const userAge: number = 25;
     const userCity: string = "New York";
    return (
        <div>
            Woohh!! You have created your first React component!
            <p>Hello, {username}!</p>

            <Card name={username} age={userAge}  city={userCity}/>
        </div>
    )
}

 // DAY1 NOTES:
  // Concept 1. Basic component creation in react
  // Component is used to create reusable UI elements in react.
  // It can be created using function or class.
  // In this example we are creating a functional component.
  // Best practise tips: 
  // File name should start with capital letter and it should be in pascal case.
  // Component name should be same as file name.
  // Component should be exported so that it can be used in other files.
  // Component should be imported in the file where it is used.
  // Component should be used inside a parent component.
  // Component should return a single JSX element. 
  // If you want to return multiple elements, you can wrap them in a div or React Fragment.  <></>

// JSX is a syntax extension for JavaScript. 
// It allows us to write HTML-like code in our JavaScript files.
// JSX is not a string or HTML. It is a syntax that gets compiled to React.createElement() calls which return plain JavaScript objects called “React elements”. 
// These elements are then rendered to the DOM by React.
// JSX is used to describe what the UI should look like.
// JSX allows only javascript expressions inside curly braces {}.
// You cannot use statements or control flow inside JSX.
// comment inside the JSX is written inside curly braces and wrapped in /* */.


// # PROPS Concept
// Props are used to pass data from parent component to child component.
// Props are read-only. They cannot be modified by the child component.
// Props are passed to the child component as an object. 
// Props can be written in two ways.
// First way is to pass the props as an object and access them using props.name, props.age, props.city.
// Second way is to use destructuring to access the props directly. 
// In this example we are using destructuring to access the props directly.
// Props best practise tips:
// 1. Use prop types to define the type of props.
// This will help in catching errors during development.
// 2. Use default props to define default values for props. 
// This will help in avoiding undefined values.
// 3. Use prop validation to validate the props passed to the component.
//  This will help in catching errors during development.


// Concept:  props drilling 
// Props drilling is a process of passing data from parent component to child component through props and pass same data to further sub childs.
// In this example we are passing data from Hello component to Card component through props.
// In Card component we are passing same data to ChildCard component through props.
// problem with props drilling is that it can make the code hard to read and maintain.
// solution to props drilling is to use context API or state management libraries like redux, mobx etc.