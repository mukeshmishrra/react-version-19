// Task 2 : Form - input field value changes
// onChange, onSubmit 
// create login form 
const headerStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    textAlign: "center",
    color: "#333"
} as const;

const bodyStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "15px"
} as const;

const inputStyle = {
    padding: "12px 15px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "15px",
    outline: "none",
    transition: "border-color 0.2s",
} as const;

const buttonStyle = {
    padding: "12px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.2s"
} as const;

const loginMainContainer = {
    maxWidth: "420px",
    margin: "0 auto",
    padding: "32px",
    borderRadius: "16px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)",
} as const;

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

type FormValues = {
    email: string;
    password: string;
};

type FormErrors = {
    email?: string;
    password?: string;
};

export const Question2 = () => {
    const [values, setValues] = useState<FormValues>({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState<FormErrors>({});

    const validate = (currentValues: FormValues) => {
        const validationErrors: FormErrors = {};

        if (!currentValues.email.trim()) {
            validationErrors.email = "Email is required.";
        } else if (!/^\S+@\S+\.\S+$/.test(currentValues.email)) {
            validationErrors.email = "Enter a valid email address.";
        }

        if (!currentValues.password) {
            validationErrors.password = "Password is required.";
        } else if (currentValues.password.length < 6) {
            validationErrors.password = "Password must be at least 6 characters.";
        }

        return validationErrors;
    };

    const handleChange = (field: keyof FormValues) => (event: ChangeEvent<HTMLInputElement>) => {
        setValues((current) => ({ ...current, [field]: event.target.value }));
        setErrors((current) => ({ ...current, [field]: undefined }));
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const validationErrors = validate(values);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) {
            return;
        }

        console.log("Form values:", values);
        setValues({ email: "", password: "" });
    };

    return (
        <div style={loginMainContainer}>
            <div style={headerStyle}>Login Page</div>

            <form onSubmit={handleSubmit} style={bodyStyle} noValidate>
                <div style={bodyStyle}>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={values.email}
                        onChange={handleChange("email")}
                        style={inputStyle}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        aria-invalid={Boolean(errors.email)}
                    />
                    {errors.email && (
                        <span id="email-error" role="alert" style={{ color: "#d32f2f" }}>
                            {errors.email}
                        </span>
                    )}
                </div>

                <div style={bodyStyle}>
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        value={values.password}
                        onChange={handleChange("password")}
                        style={inputStyle}
                        aria-describedby={errors.password ? "password-error" : undefined}
                        aria-invalid={Boolean(errors.password)}
                    />
                    {errors.password && (
                        <span id="password-error" role="alert" style={{ color: "#d32f2f" }}>
                            {errors.password}
                        </span>
                    )}
                </div>

                <div className="login-footer">
                    <button type="submit" style={buttonStyle} className="login-submit-btn">
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
};

