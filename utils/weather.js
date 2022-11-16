const request = require('postman-request');

const getWeather = (city, callback) => {
    let API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=c5a16cc206494e67207a0cfdcb6db03e`
    request(API, (err, res, body) => {
        let tempData = JSON.parse(res.body);
        let mssg = `Currently in ${tempData.name} is ${tempData.main.temp}*C`;
        callback(undefined, mssg);
    });


}   


module.exports = {getWeather};