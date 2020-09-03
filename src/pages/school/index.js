import React from 'react';

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
        name: '',
        cnpj: '',
        email: '',
        adress: '',
        city: '',
        state: '',
        img_url: '',
        description: '',
        lab: {
            weekday: '',
            vacancies: '',
            time_from: '',
            time_to: ''
        }
    }

    handleSubmit = event => {
        console.log(this.state.name);
        console.log(this.state.cnpj);
        console.log(this.state.email);
        console.log(this.state.adress);
        console.log(this.state.city);
        console.log(this.state.state);
        console.log(this.state.description);
        console.log(this.state.lab.weekday);
        console.log(this.state.lab.vacancies);
        console.log(this.state.lab.time_from);
        console.log(this.state.lab.time_to);
        event.preventDefault();
    }

    handleInputChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({ [name]: value });
    }

    handleWeekdayChange = event => {
        this.setState({ lab: { weekday: event.target.value } });
    }

    handleTimeFromChange = event => {
        const time_from = this.convertHoursToMinutes(event.target.value);
        this.setState({ lab: { time_from } });
    }

    handleTimeToChange = event => {
        const time_to = this.convertHoursToMinutes(event.target.value);
        this.setState({ lab: { time_to } });
    }

    handleVacancesChange = event => {
        this.setState({ lab: { vacancies: event.target.value } });
    }

    convertHoursToMinutes(time) {
        const [hour, minutes] = time.split(':');
        return Number((hour * 60) + minutes)
    }

    render() {
        const { school, lab } = this.state;

        return (
            <div className="school-page" >
                <Header title={title} />
                <div className="school-forms-container">
                    <form onSubmit={this.handleSubmit}>
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
                                    <input type="number" onChange={this.handleVacancesChange} />
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
                            <input className="btn-action" value="Cadastrar Vagas" type="submit" />
                        </div>
                    </form>
                </div>

            </div>
        )
    }
}