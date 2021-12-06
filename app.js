const cors = require('cors');
const express = require('express');
const app = express();
const axios = require('axios');

const values = require('./values.js');

app.use(cors());

const Description = require('./models/Description');
const bodyParser = require('body-parser');

app.use(bodyParser.json());


//rota
app.get("/", async (req, res) => {
    res.json(values.descriptionJSON);
})

app.post("/description", async (req, res) => {
    const descriptionText = req.body;

    console.log(descriptionText);
    values.descriptionJSON = descriptionText;

    await Description.create(req.body);

});

app.listen(6565, () => {
    console.log("Servidor ligado na porta 6565 | http://localhost:6565/");
});