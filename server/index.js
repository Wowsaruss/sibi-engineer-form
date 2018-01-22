require('dotenv').config();
const controller = require('./controller/controller');
const bodyParser = require('body-parser');
const massive = require('massive');
const express = require('express');
const cors = require('cors');
const app = express();
const port  =  3100;

app.use(express.static('build'))
app.use(bodyParser.json());
app.use(cors());

massive(process.env.CONNECTION_STRING)
.then( db => {
    app.set('db', db)
});

app.post('/api/data_submit', controller.submit_data);

app.listen(port, () => console.log(`listening on port ${port}`));