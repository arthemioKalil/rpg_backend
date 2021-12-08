const cors = require('cors');
const express = require('express');
const app = express();
const axios = require('axios');

const values = require('./values.js');

const Description = require('./models/Description');
const bodyParser = require('body-parser');

app.use(bodyParser.json());


//  app.use(cors())
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Acess-Control-Allow-Methods", 'GET,PUT,POST');

    app.use(cors());
    next();
});

//rota
app.get("/", async (req, res) => {
    console.log("Backend!")
    res.json(values.descriptionJSON);
})

app.post("/description", async (req, res) => {
    console.log("Backend/description " + req.body)
    const descriptionText = req.body;

    console.log(descriptionText);
    values.descriptionJSON = descriptionText;

    await Description.create(req.body);

});

const port = process.env.PORT || 3000;

app.listen(port, () => {
console.log(`Na porta: ${port} ||`);
});