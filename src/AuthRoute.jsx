import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import userService from './services/UserService';

export default class AuthRoute extends React.Component {

    render() {
        if (userService.idLogged()) {
            return <Route {...this.props} ></Route>
        }
        else {
            return <Redirect to="/forbidden" />
        }
    }

}