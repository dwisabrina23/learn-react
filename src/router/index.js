import React from 'react';
import {Switch, Route} from "react-router-dom";
import Navbar from '../components/Navbar';
import Home from '../pages/Home/HomePage';
import NotFoundPage from '../pages/NotFound/NotFoundPage';
import Contact from '../pages/Contact/Contact';
import ReviewPage from '../pages/Review/ReviewPage';
import News from '../pages/News/News';

function Router(props) {
    return (
        <Switch>
            <Route exact path="/">
                <Navbar/>
                <Home/>
            </Route>
            <Route exact path="/contact">
                <Navbar/>
                <Contact/>
            </Route>
            <Route exact path="/review">
                <Navbar/>
                <ReviewPage/>
            </Route>
            <Route exact path="/news">
                <Navbar/>
                <News/>
            </Route>
            <Route path="*">
                <NotFoundPage/>
            </Route>
        </Switch>
    );
}

export default Router;