import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import NewNote from "./containers/NewNote";
import Signup from "./containers/Signup";
import Notes from "./containers/Notes";
import Settings from "./containers/Settings";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnathenticatedRoute";
export default function Routes () {
    return (
        <Switch>
            <UnauthenticatedRoute exact path="/">
                <Home />
            </UnauthenticatedRoute>
            <UnauthenticatedRoute exact path="/login">
                <Login />
            </UnauthenticatedRoute>
            <AuthenticatedRoute exact path="/signup">
                <Signup />
            </AuthenticatedRoute>
            <AuthenticatedRoute exact path="/notes/new">
                <NewNote />
            </AuthenticatedRoute>
            <AuthenticatedRoute exact path="/notes/:id">
                <Notes />
            </AuthenticatedRoute>
            <AuthenticatedRoute exact path="/settings">
                <Settings />
            </AuthenticatedRoute>
            <Route>
                <NotFound />
            </Route>
        </Switch>
    );
}