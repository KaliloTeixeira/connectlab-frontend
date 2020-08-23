import React from 'react';
import { Link } from 'react-router-dom';

import { IoMdPerson, IoMdSchool } from 'react-icons/io';

import './styles.css';

import logo from '../../assets/logo.png';

export default class Main extends React.Component {

    render() {
        return (
            <div className="landing-page" >
                <div className="logo-container" >
                    <img src={logo} />
                    <h2>Conectando quem faz a diferença.</h2>
                </div>
                <div className="btn-container">
                    <Link to={'/student'} className="btn-action" id="student">
                        <IoMdPerson id="student-icon" />Estudante
                    </Link>
                    <Link to={'/school'} className="btn-action" id="school">
                        <IoMdSchool id="school-icon" />Instituição
                    </Link>
                </div>
            </div >
        )
    }

}