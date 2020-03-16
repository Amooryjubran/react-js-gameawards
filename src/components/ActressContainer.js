import React from 'react';
import {ActressList} from '../data/Actress';
import { Route } from 'react-router-dom';
import Actress from './Actress';
import Actresses from './Actresses'

const ActressContainer = (props) =>  {
    let actressUrl = ActressList.map((actress) => {
        return (
            <Route path={`/Actress/${actress.url}`} render={() => <Actress image={actress.profile_img} name={actress.name} details={actress.description}  />} />
        )
    });
    return (
        <>
            <Route exact path="/Actress" render={() => <Actresses title="Best Mobile Game" />} />
            {actressUrl}
        </>
    )
};

export default ActressContainer;