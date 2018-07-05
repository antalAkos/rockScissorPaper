const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var path = require('path');
const ejs = require('ejs');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


const fight = require('./controllers/fight');

const port = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => { res.render('index') });
app.post("/fight", (req,res) => { fight.match(req, res) });

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});