import React from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardBackspace } from 'react-icons/md';

import './styles.css';
import logo from '../../assets/logo.png';

const Header = (props) => {
    const title = props.title;
    let destiny;

    props.destiny ? destiny = props.destiny : destiny = '/';

    return (
        <div className="header-container">
            <div className="header-icons">
                <div className="backspace-icon">
                    <Link to={destiny} id="link" > <MdKeyboardBackspace /></Link>
                </div>
                <div className="logo-container">
                    <img src={logo} className="logo" />
                </div>
            </div>
            <div className="title-container" >
                <h1>{title}</h1>
            </div>
        </div>
    )
};

export default Header;