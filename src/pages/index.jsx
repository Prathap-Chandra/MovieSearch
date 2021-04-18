import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './home/containers/Home';
import MovieDetails from './movie-details/containers/MovieDetails';

const Pages = props => {
    const paths = {
        home: '/',
        movieDetails: '/movie-details/:id'
    }
    return (
        <Router>
            <Switch>
                <Route path={paths.home} exact component={Home}/>
                <Route path={paths.movieDetails} exact component={MovieDetails}/>
            </Switch>
        </Router>
    )
}

export default Pages;