import React from 'react';
import {ActorList} from '../data/Actors';
import { Route } from 'react-router-dom';
import Actor from './Actor';
import Actors from './Actors'

const ActorContainer = (props) =>  {
    let actrosUrl = ActorList.map((actor) => {
        return (
            <Route path={`/actors/${actor.url}`} render={() => <Actor image={actor.profile_img} name={actor.name} details={actor.description}  />} />
        )
    });
    return (
        <>
            <Route exact path="/actors" render={() => <Actors title="Best Game" />} />
            {actrosUrl}
        </>
    )
};

export default ActorContainer;