const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => { res.send('HOME') });

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});