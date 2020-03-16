import React from 'react';
import {NavLink} from 'react-router-dom';

 const navbar = (props) => {
    return (
        <div>
            <nav>
                <h2 className="logo"> <a className="logo-link" href="#">{props.title}</a></h2>
                <ul className="nav-menu">
                    <li> <NavLink className="nav-menu__link" exact to="/">Home</NavLink></li>
                    <li><NavLink className="nav-menu__link" to="/Actors">Game Nominees</NavLink></li>
                    <li><NavLink className="nav-menu__link" to="/Actress">Mobile Games</NavLink></li>
                    <li><NavLink className="nav-menu__link" to="/Films">Content Creators</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default navbar;