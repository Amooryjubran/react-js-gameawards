import React from 'react';
import {Link} from 'react-router-dom'

export const Film = (props) => {
    
    return (
        <div className="main-content">
            <div><Link className="back" to="/Films">Back</Link></div>
            <h2>{props.id}</h2>
            <div className="container">
                <div className="actor-profile-image" style={{ backgroundImage: "url(" + props.image + ")" }}></div>
                <h2>{props.name}</h2>
                <p>{props.details}</p>
            </div>
        </div>
    )
}

export default Film;