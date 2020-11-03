import React, {useState} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';

const UserForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [errs, setErrs] = useState({});

    const newUser = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/user/new", {
            firstName,
            lastName,
            email,
            username,
            password,
            confirm
        })
            .then(res => {
                console.log(res.data);
                if (res.data.errors) {
                    setErrs(res.data.errors);
                } else {
                    navigate("/fav/new");
                }
            })
            .catch(err => console.log(err));
    }
    
    return(
        <div className="container">
            
            <h1>User Information</h1>
            <form onSubmit={newUser} className="col-md-6" style={{display: "inline-block"}}>
                    <div className="form-group">
                        <label for="firstname">First Name:</label>
                        {errs.firstName ? <span className="text-danger small">{errs.firstName.message}</span> : null}
                        <input type="text" name="firstname" onChange= { e => setFirstName(e.target.value)} value={firstName} className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label for="lastname">Last Name:</label>
                        {errs.lastName ? <span className="text-danger small">{errs.lastName.message}</span> : null}
                        <input type="text" name="lastname" onChange= { e => setLastName(e.target.value)} value={lastName}className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label for="email">Email:</label>
                        {errs.email ? <span className="text-danger small">{errs.email.message}</span> : null}
                        <input type="text" name="email" onChange= { e => setEmail(e.target.value)} value={email} className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label for="username">Username:</label>
                        {errs.username ? <span className="text-danger small">{errs.username.message}</span> : null}
                        <input type="text" name="username" onChange= { e => setUsername(e.target.value)} value={username} className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label for="password">Password:</label>
                        {errs.password ? <span className="text-danger small">{errs.password.message}</span> : null}
                        <input type="text" name="password" onChange= { e => setPassword(e.target.value)} value={password} className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label for="confirm">Confirm:</label>
                        {errs.confirm ? <span className="text-danger small">{errs.confirm.message}</span> : null}
                        <input type="text" name="confirm" onChange= { e => setConfirm(e.target.value)} value={confirm} className="form-control"/>
                    </div>
                    <button type="sumbit" className="btn btn-primary" style={{marginBottom: '10px'}}>Create User</button>
                </form>
        </div>
    )
}

export default UserForm;