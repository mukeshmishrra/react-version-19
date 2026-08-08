import './App.css'
import { Hello } from './components/day1/Hello';
import { BasicStyling } from './components/day2/BasicStyling';
import { ProductList } from './components/day2/ProductList';
import { UseStatePractise  } from './components/day2/UseStateProjects/UseStatePractise';
import { Condition } from './components/day2/Condition';

function App() {
  return (
    <>
      <h1>App Component</h1>
      {/* Day 1: Hello Component */}
      <Hello />


      { /* Day 2: Basic Styling Component */}
      {/* CONCEPT 1 */}
      <BasicStyling />

      {/* CONCEPT 2. UseState Concept Practise component */}
      <UseStatePractise />

      {/* CONCEPT 3. Condition Rendering Concept practise component */}
      <Condition />

      {/* CONCEPT 4. Looping Concept practise component */}
      <ProductList />

    </>
  )
}

export default App;