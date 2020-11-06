
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';

const Account = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [errs, setErrs] = useState({});

    const [movie, setMovie] = useState("");
    const [color, setColor] = useState("");
    const [quote, setQuote] = useState("");
    const [character, setCharacter] = useState("");
    const [ship, setShip] = useState("");
    const [errs2, setErrs2] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8000/api/user/" + props.id)
            .then(res => {
                setFirstName(res.data.firstName);
                setLastName(res.data.lastName);
                setEmail(res.data.email);
                setUsername(res.data.username);
                setPassword(res.data.password);
                setConfirm(res.data.confirm);
            })
            .catch(err => console.log(err));

        axios.get("http://localhost:8000/api/fav/" + props.id)
            .then(res => {
                setMovie(res.data.movie);
                setColor(res.data.color);
                setQuote(res.data.quote);
                setCharacter(res.data.character);
                setShip(res.data.ship);
            })
            .catch(err => console.log(err));
    }, []);

    const updateAll = (e) => {
        e.preventDefault();
        const user = {firstName, lastName, email, username, password, confirm};
        const fav = {movie, color, quote, character, ship};
        axios.put("http://localhost:8000/api/user/" + props.id, user)
            .then(res => {
                console.log(res.data);
                if (res.data.errors) {
                    setErrs(res.data.errors);
                } else {
                    navigate("/home");
                }
            })
            .catch(err => console.log(err));

        axios.put("http://localhost:8000/api/fav/" + props.id, fav)
            .then(res => {
                console.log(res.data);
                if (res.data.errors) {
                    setErrs2(res.data.errors);
                } else {
                    navigate("/home");
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <div className='container'>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">StarWars</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                    <li class="nav-item">
                        <Link to="/home" style={{margin: '5px'}}>Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/account/edit/:id" style={{margin: '5px'}}>Account</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/movies" style={{margin: '5px'}}>Movies</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="" style={{margin: '5px'}}>Lightsabers</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/fav/new" style={{margin: '5px'}}>Favorites</Link>
                    </li>
                    </ul>
                </div>
            </nav>
            <form className="col-md-6" style={{display: "inline-block"}}>
                    <h1>Account Info</h1>
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
            </form>
            <form className="col-md-6" style={{display: "inline-block", verticalAlign: "top"}}>
                    <h1>Favorites</h1>
                    <div className="form-group">
                        <label for="movie">Favorite Movie:</label>
                        {errs2.movie ? <span className="text-danger small">{errs2.movie.message}</span> : null}
                        <input type="text" name="movie" onChange= { e => setMovie(e.target.value)} value={movie} className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label for="color">Favorite Lightsaber Color:</label>
                        {errs2.color ? <span className="text-danger small">{errs2.color.message}</span> : null}
                        <input type="text" name="color" onChange= { e => setColor(e.target.value)} value={color}className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label for="quote">Favorite Quote:</label>
                        {errs2.quote ? <span className="text-danger small">{errs2.quote.message}</span> : null}
                        <input type="text" name="quote" onChange= { e => setQuote(e.target.value)} value={quote} className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label for="character">Favorite Character:</label>
                        {errs2.character ? <span className="text-danger small">{errs2.character.message}</span> : null}
                        <input type="text" name="character" onChange= { e => setCharacter(e.target.value)} value={character} className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label for="ship">Favorite Ship:</label>
                        {errs2.ship ? <span className="text-danger small">{errs2.ship.message}</span> : null}
                        <input type="text" name="ship" onChange= { e => setShip(e.target.value)} value={ship} className="form-control"/>
                    </div>
            </form>
            <button type="button" onClick={updateAll} className="btn btn-primary">Update</button>
        </div>
    )
}

export default Account;