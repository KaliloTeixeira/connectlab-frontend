import React from 'react';
import api from '../../services/api';

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import './styles.css';

import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import LabComponent from './lab-component/';

const title = "Encontre aqui um cantinho para estudar...";

export default class Student extends React.Component {

    state = {
        labs: [],
        labsInfo: [],
        schools: [],
        page: 1,
        loading: false,
    }

    async componentDidMount() {
        this.setState({ loading: true });
        this.getSchools();
    }

    async getSchools() {
        const response = await api.get('/');
        this.setState({ schools: response.data });

        this.getLabs();
    }

    async getLabs(page = 1) {
        const response = await api.get(`/labs?page=${page}`);
        const { docs, ...labsInfo } = response.data;
        this.setState({ labs: docs, labsInfo, page, loading: false });
    }

    prevPage = () => {
        const { page } = this.state;

        if (page === 1) return;

        const pageNumber = page - 1;
        this.getLabs(pageNumber);
        window.scrollTo(0, 0);
    }

    nextPage = () => {
        const { page, labsInfo } = this.state;

        if (page === labsInfo.pages) return;

        const pageNumber = page + 1;
        this.getLabs(pageNumber);
        window.scrollTo(0, 0);
    }

    render() {
        const { labs, schools, labsInfo, page, loading } = this.state;

        return (
            <div className="student-page" >
                <Header title={title} />
                <div className="subtitle-container">
                    <h2>Laboratórios Cadastrados...</h2>
                </div>

                <div className="labs-container">
                    <div disabled={loading}>
                        {loading && <div className="loading-spinner" ></div>}
                    </div>

                    {labs.map(lab => {
                        const school = schools.find(school => school._id === lab.school);
                        return (
                            <LabComponent lab={lab} school={school} />
                        )
                    })}
                </div>
                <div className="page-actions" >
                    <button disabled={page === 1} onClick={this.prevPage} > <MdKeyboardArrowLeft /> </button>
                    <strong> {page} </strong>
                    <button disabled={page === labsInfo.pages} onClick={this.nextPage} >  <MdKeyboardArrowRight /> </button>
                </div>

            </div>
        )
    }

}