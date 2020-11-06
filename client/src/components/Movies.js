import React from 'react';
import {Link} from '@reach/router';


const Movies = () => {
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
            <div className='container'>
                <div className='container'>
                    <h3>Episode I: The Phantom Menace</h3>
                    <img src="/Users/dillan/Desktop/CodingDojo/Projects&Algos/Projects/SWFanUniverse/Stawars-Fan-Universe/client/src/img/1Menace.jpg" alt='Movie Poster'/>
                    <p>After a millennia, an ancient evil returns seeking revenge. Meanwhile, Jedi Knight Qui-Gon Jinn discovers Anakin Skywalker: a young slave boy unusually strong with the Force.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Movies;