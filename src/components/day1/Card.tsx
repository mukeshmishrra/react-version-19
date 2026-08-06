// First Way to write code
// export const Card = (props: any) => {

//     return (
//         <>
//             <h2>{ props.name }</h2>
//             <h2>{ props.age }</h2>
//             <h2>{ props.city }</h2>
//         </>
//     );

// }


// Second Way to write code using desctructuring props
export const Card = ({ name, age, city }: CardProps) => {
    return (
        <>
            <h2>{name}</h2>
            <h2>{age}</h2>
            <h2>{city}</h2>

            { /* Suppose this component is not using all the props value
          just passing it to child component, 
          means what it is doing unnessarily holding data right. */ }
            < ChildCard name={name} age={age} city={city} />
        </>
    );
}

// Props drilling example:
const ChildCard = ({ name, age, city }: CardProps) => {
    return (
        <>
            <h2>{name}</h2>
            <h2>{age}</h2>
            <h2>{city}</h2>
        </>
    );
}

type CardProps = {
    name: string;
    age: number;
    city: string;
}



// Concept:  props drilling
// Props drilling is a process of passing data from parent component to child component through props and pass same data to further sub childs.
// In this example we are passing data from Hello component to Card component through props.
// In Card component we are passing same data to ChildCard component through props.
// problem with props drilling is that it can make the code hard to read and maintain.
// solution to props drilling is to use context API or state management libraries like redux, mobx etc.