// components/Login.js
import React, { useState } from 'react';

const Login = ({ setIsLoggedIn }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === 'demo' && password === 'demo123') {
            setIsLoggedIn(true);
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Login to Tienda360</h2>
            <form onSubmit={handleLogin} className="login-form shadow p-4 bg-white rounded">
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-custom btn-block">Login</button>
            </form>
        </div>
    );
};

export default Login;