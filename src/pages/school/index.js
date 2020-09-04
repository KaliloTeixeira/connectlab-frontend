import React from 'react';
import api from '../../services/api';

import './styles.css';

import Header from '../../components/Header';

const title = "Cadastre os horários e a quantidade de computadores disponíveis...";

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
];

export default class School extends React.Component {

    state = {
        school: {
            name: '',
            cnpj: '',
            email: '',
            adress: '',
            city: '',
            state: '',
            img_url: 'data:image/png;base64,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',
            description: '',
        },
        lab: {
            weekday: Number,
            vacancies: Number,
            time_from: Number,
            time_to: Number,
            school: ''
        }
    }

    handleSubmit = async event => {
        this.createSchool();
        event.preventDefault();
    }

    async createSchool() {
        const response = await api.post('/', this.state.school);
        this.createLab(response.data._id);
    }

    async createLab(schoolId) {
        this.setState(prevState => ({
            lab: {
                ...prevState.lab,
                school: schoolId,
            }
        }));

        const response = await api.post('/labs', this.state.lab);
    }

    handleInputChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState(prevState => ({
            school: {
                ...prevState.school,
                [name]: value,
            }
        }));
    }

    handleWeekdayChange = event => {
        const weekday = event.target.value;
        this.setState(prevState => ({
            lab: {
                ...prevState.lab,
                weekday,
            }
        }));
    }

    handleTimeFromChange = event => {
        const time_from = this.convertHoursToMinutes(event.target.value);
        this.setState(prevState => ({
            lab: {
                ...prevState.lab,
                time_from,
            }
        }));
    }

    handleTimeToChange = event => {
        const time_to = this.convertHoursToMinutes(event.target.value);
        this.setState(prevState => ({
            lab: {
                ...prevState.lab,
                time_to,
            }
        }));
    }

    handleVacanciesChange = event => {
        const vacancies = event.target.value;
        this.setState(prevState => ({
            lab: {
                ...prevState.lab,
                vacancies,
            }
        }));
    }

    convertHoursToMinutes(time) {
        const [hour, minutes] = time.split(':');
        return Number(hour * 60 + Number(minutes));
    }

    render() {
        const { school, lab } = this.state;

        return (
            <div className="school-page" >
                <Header title={title} />
                <div className="school-forms-container">
                    <div className="school-forms-subtitle">
                        <h1>Dados da Instituição</h1>
                    </div>

                    <div className="school-forms-section" >

                        <div className="school-input-block">
                            <label for="name" >Razão Social</label>
                            <input type="text" name="name" id="name" required onChange={this.handleInputChange}></input>
                        </div>
                        <div className="school-input-block">
                            <label for="cnpj" >CNPJ</label>
                            <input type="text" name="cnpj" id="cnpj" required onChange={this.handleInputChange}></input>
                        </div>
                        <div className="school-input-block">
                            <label for="email" >E-mail</label>
                            <input type="email" name="email" id="email" required onChange={this.handleInputChange}></input>
                        </div>
                        <div className="school-input-block">
                            <label for="adress" >Endereço</label>
                            <input type="text" name="adress" id="adress" required onChange={this.handleInputChange}></input>
                        </div>
                        <div className="school-input-block" id="city-state-block">
                            <div id="city">
                                <label for="city" >Cidade</label>
                                <input type="text" name="city" id="city" required onChange={this.handleInputChange}></input>
                            </div>
                            <div id="state">
                                <label for="state" >Estado</label>
                                <input type="text" name="state" id="state" required onChange={this.handleInputChange}></input>
                            </div>
                        </div>
                        <div className="school-input-block">
                            <label for="description" >Sobre</label>
                            <textarea name="description" id="description" minLength="50" maxLength="200" required onChange={this.handleInputChange}></textarea>
                        </div>
                    </div>

                    <div className="school-forms-subtitle">
                        <h1>Horários Disponíveis</h1>
                    </div>
                    <div className="school-forms-section" >
                        <div className="lab-available">
                            <div className="school-select-block">
                                <label for="weekday" >Dia da Semana</label>
                                <select name="weekday" id="weekday" placeholder="Dia da semana" required onChange={this.handleWeekdayChange}>
                                    <option value="" selected="" ></option>
                                    {weekdays.map(weekday => (
                                        <option value={weekdays.indexOf(weekday)}>
                                            {weekday}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="vacances-number" >
                                <label for="vacances">Nº de Vagas </label>
                                <input type="number" onChange={this.handleVacanciesChange} />
                            </div>

                            <div className="lab-input-block">
                                <label for="time-from">Das </label>
                                <input type="time" name="time-from" id="time-from" min="0" max="24" placeholder="horário" required onChange={this.handleTimeFromChange} />
                            </div>
                            <div className="lab-input-block">
                                <label for="time-to">Até </label>
                                <input type="time" name="time-to" id="time-to" min="0" max="24" placeholder="horário" required onChange={this.handleTimeToChange} />
                            </div>
                        </div>
                    </div>

                    <div className="btn-container" >
                        <div className="btn-action" onClick={this.handleSubmit}>Cadastrar Vagas</div>
                    </div>
                </div>

            </div>
        )
    }
}