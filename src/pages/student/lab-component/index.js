import React from 'react';
import { Link } from 'react-router-dom';
import { weekdays, convertHoursToMinutes, convertMinutesToHours } from '../../../utils/format';


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
            <div className="vacances-container">
                <p id="vacances-title">Disponíveis</p>
                <p id="vacances-content" >{lab.vacancies}</p>
            </div>
            <div className="description-container">
                <p id="description-title">Sobre</p>
                <p id="description-content"> {school.description}</p>
            </div>
            <div className="weekday-container">
                <p id="weekday-title">Disponibilidade</p>
                <p className="weekday-content">  {weekdays[lab.weekday]} </p>
                <p className="weekday-content">  De {convertMinutesToHours(lab.time_from)} até {convertMinutesToHours(lab.time_to)}  </p>
            </div>
            <div className="adress-container">
                <p id="adress-title">Local</p>
                <p id="adress-content" >{school.adress}</p>
            </div>
            <div className="contact-btn-container" >
                <Link to={`/contact/${school._id}`} className="contact-btn">Entrar em Contato</Link>
            </div>

        </div >
    );
};

export default LabComponent;