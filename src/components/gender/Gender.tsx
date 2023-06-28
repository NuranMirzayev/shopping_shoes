
import "./gender.css";

const Gender = () => {
    return (
        <div className="gender" data-aos="zoom-in-right">
            <div className="main">
                <a href="/men" className="box main_left">
                    <p className="p_left">Men</p>
                </a>
                <a href="/kids" className="box main_center">
                    <p className="p_center">Kids</p>
                </a>
                <a href="/women" className="box main_right">
                    <p className="p_right">Women</p>
                </a>
            </div>
        </div>
    );
};

export default Gender;
