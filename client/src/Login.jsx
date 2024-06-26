import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

function Login() {
    return(
        <div>
            <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
                <div className="bg-white p-3 rounded w-25">
                    <h2>Login</h2>
                    <form>
                            <div className="mb-3">
                                <label htmlFor="email">
                                    <strong>Email</strong>
                                </label>
                                <input 
                                type="email"
                                placeholder="Enter Email"
                                autoComplete="off"
                                name="email"
                                className="form-control rounded-0"
                                />
                                </div>
                                <div className="mb-3">
                                    < label htmlFor="email">
                                        <strong>Password</strong>
                                    </label>
                                <input
                                type="password"
                                placeholder="Enter Password"
                                name="password"
                                className="form-control rounded-0"
                                />
                            </div>
                            <button type="submit" className="btn btn-success w-100 rounded-0">
                                Login
                            </button>
                            <p>Don't Have an Account?</p>
                            <Link to='/login' className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                                Register
                            </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login