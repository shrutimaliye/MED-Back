require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const path=require('path')

const medRouter = require('./routes/medRoutes')
const prescRouter=require('./routes/precRoutes')
const checkRouter=require('./routes/checkRoutes')
const mailRouter=require('./routes/mailRoutes');

const app = express()
const port = 5000

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())
app.use(bodyParser.json())

app.use('/med', medRouter);
app.use('/presc',prescRouter);
app.use('/check',checkRouter);
app.use('/mail',mailRouter)
app.use(express.static(path.join(__dirname, 'build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });


mongoose.connect(process.env.DB_HOST, { useNewUrlParser: true, useUnifiedTopology: true }) //on upgrading node version to 18.x.x use 0.0.0.0 instead of localhost
    .catch(err => { console.log(err) })
    .then(console.log("DB connected"));

app.listen(port, () => console.log(`app listening on port ${port}!`))