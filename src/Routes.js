import React from "react";
import HomePage from "./pages/HomePage"
import SpecialityPage from "./pages/SpecialityPage"

import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route,
} from "react-router-dom";


export default function Routes() {
    return (
        <Router>
            <Switch>

                <Route exact path="/"  >
                    <HomePage />
                </Route>
                <Route exact path="/speciality"  >
                    <SpecialityPage />
                </Route>

            </Switch>
        </Router>
    );
}