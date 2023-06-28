import React, { useState } from 'react';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Avatar, IconButton, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAuth } from '../../app/useAuth';


const TestWelcome = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const { isAuth } = useAuth();

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };



    return (
        <div>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
            >
                <Avatar alt="test" sx={{ width: "21px", height: "21px", color: 'black' }} > <AccountCircleIcon color='inherit' /> </Avatar>
            </IconButton>
            {
                !isAuth &&
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                        <MenuItem onClick={handleClose}><Link style={{ color: 'black', textDecoration: "none", fontWeight: "500" }} to="/log in" >Log In </Link></MenuItem>
                        <MenuItem onClick={handleClose}> <Link style={{ color: 'black', textDecoration: "none", fontWeight: "500" }} to="/sign up">Sign up </Link></MenuItem>

                </Menu>
            }
        </div>
    )
}

export default TestWelcome