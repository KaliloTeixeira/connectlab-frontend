import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main/';
import School from './pages/school/';
import Student from './pages/student/';
import ContactSchool from './pages/contact-school/';


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/school" component={School} />
            <Route path="/student" component={Student} />
            <Route path="/contact" component={ContactSchool} />

        </Switch>
    </BrowserRouter>
)

export default Routes;