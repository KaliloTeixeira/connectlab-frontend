import React from 'react';

import './styles.css';

import Header from '../../components/Header';
import LabComponent from './lab-component/';

const title = "Encontre aqui um cantinho para estudar...";

export default class Student extends React.Component {
    render() {
        return (
            <div className="student-page" >
                <Header title={title} />
                <div className="subtitle-container">
                    <h2>Laboratórios Cadastrados...</h2>
                </div>
                <div className="labs-container">
                    <LabComponent />
                    <LabComponent />
                    <LabComponent />
                </div>
            </div>
        )
    }

}