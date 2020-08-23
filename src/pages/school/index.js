import React from 'react';

import './styles.css';

import Header from '../../components/Header';

const title = "Cadastre os horários e a quantidade de computadores disponíveis...";


export default class School extends React.Component {
    render() {
        return (
            <div className="school-page" >
                <Header title={title} />
            </div>
        )
    }
}