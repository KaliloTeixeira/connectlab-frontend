const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
];

function convertHoursToMinutes(time) {
    const [hour, minutes] = time.split(':');
    return Number((hour * 60) + minutes)
}

function convertMinutesToHours(time) {
    var hours, minutes;

    hours = parseInt(time / 60);
    minutes = time % 60;

    return (`${parseInt(hours)}h:${minutes}m`);
}



module.exports = {
    weekdays,
    convertHoursToMinutes,
    convertMinutesToHours
}