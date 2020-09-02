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
    render() {
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
                            <input type="text" name="name" id="name" required ></input>
                        </div>
                        <div className="school-input-block">
                            <label for="cnpj" >CNPJ</label>
                            <input type="text" name="cnpj" id="cnpj" required ></input>
                        </div>
                        <div className="school-input-block">
                            <label for="email" >E-mail</label>
                            <input type="email" name="email" id="email" required ></input>
                        </div>
                        <div className="school-input-block">
                            <label for="adress" >Endereço</label>
                            <input type="text" name="adress" id="adress" required ></input>
                        </div>
                        <div className="school-input-block" id="city-state-block">
                            <div id="city">
                                <label for="city" >Cidade</label>
                                <input type="text" name="city" id="city" required ></input>
                            </div>
                            <div id="state">
                                <label for="state" >Estado</label>
                                <input type="text" name="state" id="state" required ></input>
                            </div>
                        </div>
                    </div>

                    <div className="school-forms-subtitle">
                        <h1>Horários Disponíveis</h1>
                    </div>
                    <div className="school-forms-section" >
                        <div className="lab-available">
                            <div className="school-select-block">
                                <label for="weekday" >Dia da Semana </label>
                                <select name="weekday" id="weekday" placeholder="Dia da semana" onChange={this.handleWeekdayChange}>
                                    <option value="" selected="" ></option>
                                    {weekdays.map(weekday => (
                                        <option value={weekdays.indexOf(weekday)}>
                                            {weekday}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="lab-input-block">
                                <label for="time-from">Das </label>
                                <input type="time" name="time-from" id="time-from" min="0" max="24" placeholder="horário" onChange={this.handleTimeChange} />
                                {/* value={this.state.forms.time} */}
                            </div>
                            <div className="lab-input-block">
                                <label for="time-to">Até </label>
                                <input type="time" name="time-to" id="time-to" min="0" max="24" placeholder="horário" onChange={this.handleTimeChange} />
                                {/* value={this.state.forms.time} */}
                            </div>
                        </div>
                    </div>

                    <div className="btn-container" >
                        <div className="btn-action">Cadastrar Vagas</div>
                    </div>
                </div>

            </div>
        )
    }
}