import React, { useState, type ChangeEvent } from "react";
import "../../App.css";

export const SimpleFormComponent = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();  //prevent page refresh 
        console.log("name: ", name);
        console.log("email: ", email);
    }

    return (
        <>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <div className="input-box">
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="input-box">
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="submit-button">
                        <button type="submit">
                            Submit
                        </button>
                    </div>

                </form>

            </div>
        </>

    )
}
