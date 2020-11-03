import React from 'react';
import {Link, navigate} from '@reach/router';
import axios from 'axios';

const Login = () => {
    return (
        <div className='container'>
            <h1>Login</h1>
            <Link to="/user/new" style={{marginLeft: '800px'}}>Not a Member? Register</Link>
            <form>
                        <div className="form-group">
                            <label for="username">Username:</label>
                            <input type="text" name="username" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label for="password">Password:</label>
                            <input type="text" name="password" className="form-control"/>
                        </div>
                        <button type="sumbit" className="btn btn-primary" style={{marginBottom: '10px'}}>Login</button>
                    </form>
        </div>
    )
}

export default Login;