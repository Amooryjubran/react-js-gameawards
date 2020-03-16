import React from 'react';
import {FilmsList} from '../data/Films';
import { Route } from 'react-router-dom';

import Film from './Film';
import Films from './Films';

const FilmsContainer = (props) =>  {
    let filmsUrl = FilmsList.map((film) => {
        return (
            <Route path={`/Films/${film.url}`} render={() => <Film image={film.profile_img} name={film.name} details={film.description}  />} />
        )
    });
    return (
        <>
            <Route exact path="/Films" render={() => <Films title="Best Content Creator" />} />
            {filmsUrl}
        </>
    )
};

export default FilmsContainer;