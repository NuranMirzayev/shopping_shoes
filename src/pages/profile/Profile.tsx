import LogoutIcon from '@mui/icons-material/Logout';
import { Avatar, IconButton, Menu, MenuItem } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAppDispatch } from "../../app/hooks";
import { removeGoogle } from "../../features/User/GoogleSlice";
import { removeUser } from "../../features/User/UserSlice";
import './profile.css';




const Profile = () => {
    const dispatch = useAppDispatch()

    const [menuP, setMenuP] = useState<null | HTMLElement>(null);
    const [refresh, setResfresh] = useState(false)

    const navigate = useNavigate();

    useEffect(() => {
        if (refresh) {
            window.location.reload();
        }
    }, [refresh])

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setMenuP(event.currentTarget);
    };

    const handleClose = () => {
        setMenuP(null);
    };

    const handleLogOut = () => {
        setResfresh(true);
        dispatch(removeUser())
        localStorage.removeItem('email');
        navigate("/log in")
        toast.warning(`${emailRegular} left account`, {
            position: "bottom-left"
        })

    }

    const handleLogOutGoogle = () => {
        setResfresh(true);
        dispatch(removeGoogle())
        localStorage.removeItem('photoGoogle');
        navigate("/log in")
        toast.warning(`${emailGAuth} left account`, {
            position: "bottom-left"
        })
    }


    const photoG = localStorage.getItem("photoGoogle")
    const emailGAuth = localStorage.getItem('emailGoogle')
    const emailRegular = localStorage.getItem('email')

    return (
        <div className='profile'>
            <div className="container__prof">

                <div>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                    >
                        {emailRegular ?
                            <Avatar alt={`${emailRegular} `} sx={{ width: 31, height: 31, bgcolor: deepOrange[500] }} src="/broken-image.jpg" />
                            :
                            <Avatar alt={`${emailGAuth}`} sx={{ width: 31, height: 31 }} src={` ${photoG}`} />
                        }

                    </IconButton>
                    {/* <p style={{ display: 'inline-block', fontSize: '12px' }}>
                        {emailRegular ? emailRegular : emailGAuth}
                    </p> */}
                    <Menu
                        id="menu-appbar"
                        anchorEl={menuP}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(menuP)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={() => navigate('/about us')}><Link style={{ color: 'black', textDecoration: "none", fontWeight: "500" }} to="/about us" >Setting</Link></MenuItem>
                        <MenuItem
                            onClick={() => {

                                emailRegular ? handleLogOut() : handleLogOutGoogle();
                            }}
                            sx={{ color: 'black', textDecoration: "none", fontWeight: "500" }}
                        // > <Link style={{ color: 'black', textDecoration: "none", fontWeight: "500" }} to="/log in">Log out {emailRegular || emailGAuth}</Link></MenuItem>
                        >Log out <LogoutIcon sx={{ marginLeft: '5px' }} /> </MenuItem>
                    </Menu>
                </div>


            </div>
        </div>


    )
}

export default Profile