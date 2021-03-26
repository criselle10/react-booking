import React, {useContext} from 'react';
import {Redirect} from 'react-router-dom';
import UserContext from '../UserContext';

export default function Logout(){  
    // consume the UserContext object and destrcture t to access unsetUser and setUser
    const {unsetUser, setUser} = useContext(UserContext);

    unsetUser();

    setUser({
        email: '',
        isAdmin: ''
    })

    return (
        <Redirect to = '/login' />
    )
}