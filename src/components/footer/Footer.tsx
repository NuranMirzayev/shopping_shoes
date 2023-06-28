/* eslint-disable jsx-a11y/anchor-is-valid */

import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

import { IconButton } from "@mui/material";
import "./footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_top">
                <div className="footer_logo">
                    <img className="footer_logo_img" src="./assets/Logo.png" alt="" />
                    <b>Space Shoes</b>
                </div>
                <div className="products">
                    <h2>Products</h2>
                    <a className="footer_a" href="/men">
                        Men
                    </a>
                    <a className="footer_a" href="/women">
                        Women
                    </a>
                    <a className="footer_a" href="/kids">
                        Kids
                    </a>
                    <a className="footer_a" href="/sale">
                        Sale
                    </a>
                    <a className="footer_a" href="#">
                        About us
                    </a>
                </div>
                <div className="getHelp">
                    <h2>Get help</h2>
                    <a className="footer_a" href="#">
                        Order status
                    </a>
                    <a className="footer_a" href="#">
                        Shipping and delovery
                    </a>
                    <a className="footer_a" href="#">
                        Returns
                    </a>
                    <a className="footer_a" href="#">
                        Payment options
                    </a>
                </div>
                <div className="contact">
                    <h2>Contact</h2>
                    <p>Email</p>
                    <h5>SpaceShoes@gmail.com</h5>
                    <p>Phone</p>
                    <a className="footer_number" href="#">
                        +972 555 777 77 77
                    </a>
                    <p>Address</p>
                    <h5>2424 David ,Jerusalem 2424</h5>
                </div>
            </div>
            <hr />
            <div className="footer_bottom">
                <div className="footer_bottom_left">
                    <h6>Nuran Mirzayev © 2023</h6>
                </div>
                <div className="footer_bottom_right">
                    <IconButton color="inherit">
                        <FacebookOutlinedIcon sx={{ fontSize: 35 }} />
                    </IconButton>
                    <IconButton color="inherit">
                        <InstagramIcon sx={{ fontSize: 35 }} />
                    </IconButton>
                    <IconButton color="inherit">
                        <TwitterIcon sx={{ fontSize: 35 }} />
                    </IconButton>
                </div>
            </div>
        </div>
    );
};

export default Footer;
