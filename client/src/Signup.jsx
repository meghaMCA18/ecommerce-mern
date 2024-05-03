import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        
        axios.post( 'http://localhost:3001/register', {name, email, password})
        .then(result => {
            console.log(result);
            if(result.data === "Already registered"){
                alert("E-mail already registered! Please Login to proceed.");
                navigate('/login');
            }
            else{
                alert("Registered successfully! Please Login to proceed.")
                navigate('/login');
            }
            
        })
        .catch(err => console.log(err));
    }

    return(
        <div>
            <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
                <div className="bg-white p-3 rounded w-25">
                    <h2>Register</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email">
                                <strong>Name</strong>
                            </label>
                            <input
                            type="text"
                            placeholder="Enter Name"
                            autoComplete="off"
                            name="name"
                            className="form-control rounded-0"
                            onChange={(event) => setName(event.target.value)}
                            required
                            />
                            </div>
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
                                onChange={(event) => setEmail(event.target.value)}
                                required
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
                                onChange={(event) => setPassword(event.target.value)}
                                required
                                />
                            </div>
                            <button type="submit" className="btn btn-success w-100 rounded-0">
                                Register
                            </button>
                            <p>Already Have an Account</p>
                            <Link to='/login' className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                                Login
                            </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup;