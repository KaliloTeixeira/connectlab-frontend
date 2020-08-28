import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const LabComponent = (props) => {

    const school = props.school;
    const lab = props.lab;

    return (

        <div className="lab-component">
            <div className="lab-component-header">
                <div className="school-img-container" >
                    <img className="school-img" src={school.img_url} />
                </div>
                <div className="title-container">
                    <h1 className="school-name">{school.name}</h1>
                    <h2 className="school-city">{school.city}-{school.state}</h2>
                </div>
            </div>

            <div className="contact-btn-container" >
                <Link to={`/contact/${school._id}`} className="contact-btn">Entrar em Contato</Link>
            </div>

        </div >
    );
};

export default LabComponent;