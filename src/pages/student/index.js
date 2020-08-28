import React from 'react';
import api from '../../services/api';

import './styles.css';

import Header from '../../components/Header';
import LabComponent from './lab-component/';

const title = "Encontre aqui um cantinho para estudar...";

export default class Student extends React.Component {

    state = {
        labs: [],
        schools: []
    }

    async componentDidMount() {
        this.getSchools();
    }

    async getSchools() {
        const response = await api.get('/');
        this.setState({ schools: response.data });
        this.getLabs();
    }

    async getLabs() {
        const response = await api.get('/labs');
        this.setState({ labs: response.data });
    }

    render() {
        const { labs, schools } = this.state;

        return (
            <div className="student-page" >
                <Header title={title} />
                <div className="subtitle-container">
                    <h2>Laboratórios Cadastrados...</h2>
                </div>
                <div className="labs-container">

                    {labs.map(lab => {
                        const school = schools.find(school => school._id === lab.school);
                        return (
                            <LabComponent lab={lab} school={school} />
                        )
                    })}


                </div>
            </div>
        )
    }

}