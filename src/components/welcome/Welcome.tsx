import React from 'react'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import IconButton from '@mui/material/IconButton';

import ClearIcon from '@mui/icons-material/Clear';
import './welcome.css'

interface Props {
    uid:string
}

const Welcome = () => {

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            // const uid = user.uid;
            // ...
        } else {
            // User is signed out
            // ...
        }
    });

    return (
        <div className='welcome'>
            <div className="welcome__container">
                <IconButton href='/' color='inherit'>
                    <ClearIcon />
                </IconButton>
                <div className='welcome__text'>
                    <h1>Welcome </h1>
                </div>
            </div>
        </div>
    )
}

export default Welcome