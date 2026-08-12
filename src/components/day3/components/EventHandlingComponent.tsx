import { Question1 } from "./Question1"
import { Question2 } from "./Question2"

export const EventHandlingComponent = () => {
  return (
    <div>EventHandlingComponent
        <Question1 />
        <Question2 />
    </div>
  )
}



// Explain all the event handling concept using coding examples
// Event Handling : 
// Jab user webpage par kuch karta hai—jaise button par click karna, input box mein kuch type karna, form submit karna, ya mouse hover karna—use hum Event kehte hain.
// React mein in events ko handle karne ke tarike ko Event Handling kehte hain. Yeh bilkul HTML/JS jaisa hi hai, bas thoda sa React ka syntax alag hota hai (camelCase use hota hai).

// Key Rules & Differences (HTML vs React): 
// camelCase Syntax: HTML mein onclick hota hai, lekin React mein yeh onClick hota hai. (onMouseOver, onChange, onSubmit).

// Function Pass Karna: React mein hum event ke andar string nahi balki function reference pass karte hain.
// Galat: <button onclick="myFunc()">Click</button> (HTML style)
// Sahi: <button onClick={myFunc}>Click</button> (React style)


// Common Event Types & Theory

// 01. onClick: Jab user kisi element (button, div, image) par click kare.
// 02. onChange: Jab input field, textarea, ya dropdown mein value badle (typing karte waqt).
// 03. onSubmit: Jab koi form submit ho.
// 04. onMouseEnter / onMouseLeave: Jab mouse kisi element ke upar aaye ya hat jaye.

