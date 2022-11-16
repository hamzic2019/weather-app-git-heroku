const hbs = require('hbs');
const bodyParser = require('body-parser');
const path = require('path');
const express = require('express');
const app = express();

// importing from utils
const weather = require('./utils/weather.js');


app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, './templates/views'));
hbs.registerPartials(path.join(__dirname, './templates/partials'));

app.get('/', (req, res) => {
    let url = `http://localhost:3000/`;
    res.render('index', {url});
})

app.get('/ask', (req, res) => {
    let city = req.query.city || 'Sarajevo';
    weather.getWeather(city, (err, mssg) => {
        res.send({
            mssg
        })
    })
    
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`App is running on PORT: ${PORT}`);
})