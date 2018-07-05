const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
//const ejs = require('ejs');
const path = require('path');


const fight = require('./controllers/fight');

const port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");

app.get("/", (req, res) => { res.render('index') });
app.post("/fight", (req,res) => { fight.match(req, res) });

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});