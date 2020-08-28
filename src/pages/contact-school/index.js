import React from 'react';
import Header from '../../components/Header/'

import './styles.css';

const title = "Preencha seus dados e descreva sua situação para a Instituição...";

export default class ContactSchool extends React.Component {

    render() {
        return (
            <div className="contact-container" >
                <Header title={title} destiny="/student" />
            </div>
        )
    }
}