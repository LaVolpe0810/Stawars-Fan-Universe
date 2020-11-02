import React, {useEffect, useState} from 'react';
import {Link} from '@reach/router';
import axios from 'axios';

const Home = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8000/api/user/" + user._id)
            .then(res => setUser(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="container" style={{backgroundImage: "url("+"https://fcmod.org/wp-content/uploads/2020/04/star-Wars-Wallpaper.jpg"+")", height: "500px"}}>
            <h2>Jedi {user.firstName}</h2>
            <div className="container" style={{backgroundColor: 'grey', border: "solid", width: '800px'}}>
                <p><b>Favorite Movie</b>: {user.movie}</p>
                <p><b>Lightsaber Color</b>: {user.color}</p>
                <p><b>Favorite Character</b>: {user.character}</p>
                <p><b>Favorite Ship</b>: {user.ship}</p>
            </div>
            <h2>{user.quote}</h2>
            <div className='container' style={{backgroundColor: "grey", width: "500px", border: "solid"}}>
            <h3>Vist the offical StarWars website!</h3>
            </div>
            <a href="https://www.starwars.com/"><button type='button' className="btn btn-primary" >StarWars.com</button></a>
        </div>
    )
}

export default Home;