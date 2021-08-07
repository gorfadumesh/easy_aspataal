import React from "react";
import HomePage from "./pages/HomePage"
import SpecialityPage from "./pages/SpecialityPage"
import HospitalSearch from "./pages/HospitalSearch"
import HospitalListing from "./pages/HospitalListing"
import EasyLoan from "./pages/EasyLoan"

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

                <Route exact path="/HospitalSearch"  >
                    <HospitalSearch />
                </Route>

                <Route exact path="/HospitalListing"  >
                    <HospitalListing />
                </Route>
                <Route exact path="/EasyLoan"  >
                    <EasyLoan />
                </Route>
            </Switch>
        </Router>
    );
}
