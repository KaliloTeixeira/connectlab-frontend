import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const LabComponent = () => {

    return (
        <div className="lab-component">
            <div className="lab-component-header">
                <div className="school-img-container" >
                    <img className="school-img" src="https://media.glassdoor.com/sqll/2738518/rede-ftc-squarelogo-1564561646425.png" />
                </div>
                <div className="title-container">
                    <h1 className="school-name">FTC</h1>
                    <h2 className="school-city">Vitória da Conquista - BA</h2>
                </div>
            </div>

            <div className="contact-btn-container" >
                <Link to="/contact" className="contact-btn" >Entrar em Contato</Link>
            </div>

        </div >
    );
};

export default LabComponent;