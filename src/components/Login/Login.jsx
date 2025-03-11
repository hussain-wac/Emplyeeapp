import React from "react";
import { Navigate } from "react-router-dom";
import {  useAtomValue } from "jotai"; // Import useAtom from Jotai
import { userState } from "../../jotai/userState";
import useAuth from "../../hooks/useAuth";
import { Form } from "informed";
import CustomField from "./CustomField";
import CustomPasswordField from "./CustomPasswordField";

const validateEmail = (value) => {
  if (!value) return "Email is required";
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return !regex.test(value) ? "Invalid email address" : undefined;
};

const Login = () => {
  const { login, error, isMutating } = useAuth();
  const user = useAtomValue(userState); 

  if (user) {
    return <Navigate to="/home" replace />;
  }

  const handleSubmit = (values) => {
    login(values.values.username, values.values.password);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card w-100" style={{ maxWidth: "400px" }}>
        <div className="card-body">
          <h2 className="card-title text-center mb-4">Login</h2>
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}
          <Form onSubmit={handleSubmit}>
            <CustomField
              label="Email"
              name="username"
              validate={validateEmail}
              required
            />
            <CustomPasswordField
              label="Password"
              name="password"
              validate={(value) =>
                !value ? "Password is required" : undefined
              }
              required
            />
            <button
              type="submit"
              className="btn btn-primary w-100"
              disabled={isMutating} // Disable button while loading
            >
              {isMutating ? (
                <div className="spinner-border text-light" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : (
                "Login"
              )}
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
