import { useEffect, useState } from "react";

export const Condition = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // after page load add a 10 second delay, then hide the spinner and show the products
  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsLoading(false);
    }, 10000);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  const spinnerStyle = {
    width: '50px',
    height: '50px',
    border: '5px solid #f3f3f3',
    borderTop: '5px solid #3498db',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  };

  const [products, SetProducts] = useState([
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
  ]);


  return (
    <div>
      <h1>Condition Handson Practise</h1>
      <h3>Example 1. Toggle button</h3>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>{isLoggedIn ? 'Logout' : 'Login'}</button>
      <h2>{isLoggedIn ? 'Successfully Logged In!!' : 'Please log in.'} </h2>


      <h2>Example 2. Loading spinner</h2>
      <p>Products are hidden while the spinner is active.</p>
      {isLoading ? (
        <div className="spinner" style={spinnerStyle}></div>
      ) : (
        <div>
          <h3>Product List</h3>
          <table border={1}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {products.map((val) => (
                <tr key={val.id}>
                  <td>{val.id}</td>
                  <td>{val.name}</td>
                  <td>{val.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}


// Real scenario based practise
// Example1. toggle button to show and hide the text.
// Example2. Loading spinner real project based approach implementation.
// Example3. Apply the style based on condition
// suggest some more real scenario based practise for condition rendering concept.
// Example4. Display different components based on user authentication status
// (e.g., show login form if not authenticated, show dashboard if authenticated).
// Example5. Show different messages based on user role (e.g., admin, user, guest).
// Example6. Display a warning message if a form field is empty or invalid.
// Example7. Show a modal or popup based on user interaction (e.g., clicking a button).
// Example8. Render different layouts based on screen size (e.g., mobile vs desktop).
// Example9. Display a success message after a form submission or action completion.
// Example10. Show a error message if an API call fails.

// Multiple questions are here to practise i will cover only few of them in this project.