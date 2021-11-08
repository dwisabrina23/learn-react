import React from 'react';
import {Switch, Route} from "react-router-dom";

import Navbar from '../pages/Todo/component/Navbar';
import ToDoPage from '../pages/Todo/TodoPage';
// import About from '../pages/About/About';
import AboutApp from '../pages/About/AboutApp';
import AboutAuthor from '../pages/About/AboutAuthor';
import NotFoundPage from '../pages/NotFound/NotFoundPage';

function Router(props) {
    return (
        <Switch>
            <Route exact path="/">
                <Navbar/>
                <ToDoPage/>
            </Route>
            {/* <Route exact path="/about">
                <Navbar author={"About Author"} app={"About App"}/>
                <About/>
            </Route> */}
            <Route exact path="/about-app">
                <Navbar author={"About Author"} app={"About App"}/>
                <AboutApp/>
            </Route>
            <Route exact path="/about-author">
                <Navbar author={"About Author"} app={"About App"}/>
                <AboutAuthor/>
            </Route>
            <Route path="*">
                <NotFoundPage/>
            </Route>
        </Switch>
    );
}

export default Router;