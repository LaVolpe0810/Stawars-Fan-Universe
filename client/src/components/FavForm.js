import React, {useState} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';

const FavForm = () => {
    const [movie, setMovie] = useState("");
    const [color, setColor] = useState("");
    const [quote, setQuote] = useState("");
    const [character, setCharacter] = useState("");
    const [ship, setShip] = useState("");
    const [errs, setErrs] = useState({});

    const newFav = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/fav/new", {
            movie,
            color,
            quote,
            character,
            ship
        })
        .then(res => {
            console.log(res.data);
            if (res.data.errors) {
                setErrs(res.data.errors);
            } else {
                navigate("/home");
            }
        })
        .catch(err => console.log(err));

    }
    return (
        <div className="container">
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
                        <Link to="" style={{margin: '5px'}}>Account</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="" style={{margin: '5px'}}>Movies</Link>
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
            <h1>Your Favorites</h1>
        <form onSubmit={newFav}>
                <div className="form-group">
                    <label for="movie">Favorite Movie:</label>
                    {errs.movie ? <span className="text-danger small">{errs.movie.message}</span> : null}
                    <input type="text" name="movie" onChange= { e => setMovie(e.target.value)} value={movie} className="form-control"/>
                </div>
                <div className="form-group">
                    <label for="color">Favorite Lightsaber Color:</label>
                    {errs.color ? <span className="text-danger small">{errs.color.message}</span> : null}
                    <input type="text" name="color" onChange= { e => setColor(e.target.value)} value={color}className="form-control"/>
                </div>
                <div className="form-group">
                    <label for="quote">Favorite Quote:</label>
                    {errs.quote ? <span className="text-danger small">{errs.quote.message}</span> : null}
                    <input type="text" name="quote" onChange= { e => setQuote(e.target.value)} value={quote} className="form-control"/>
                </div>
                <div className="form-group">
                    <label for="character">Favorite Character:</label>
                    {errs.character ? <span className="text-danger small">{errs.character.message}</span> : null}
                    <input type="text" name="character" onChange= { e => setCharacter(e.target.value)} value={character} className="form-control"/>
                </div>
                <div className="form-group">
                    <label for="ship">Favorite Ship:</label>
                    {errs.ship ? <span className="text-danger small">{errs.ship.message}</span> : null}
                    <input type="text" name="ship" onChange= { e => setShip(e.target.value)} value={ship} className="form-control"/>
                </div>
                <button type="sumbit" className="btn btn-primary" style={{marginBottom: '10px'}}>Submit</button>
            </form>
        </div>
    )
}

export default FavForm;