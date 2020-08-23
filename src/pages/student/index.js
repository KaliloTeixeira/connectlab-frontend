import React from 'react';

import './styles.css';
import Header from '../../components/Header';

const title = "Encontre aqui um cantinho para estudar...";

export default class Student extends React.Component {
    render() {
        return (
            <div className="school-page" >
                <Header title={title} />
            </div>
        )
    }

}