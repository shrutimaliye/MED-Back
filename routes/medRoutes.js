const express = require('express');
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const router = express.Router();

const {getAllMed,CreateMed}=require('../controller/medController');


//GET route in medical inventory to get all medicines data
router.get('/', getAllMed);

//POST route in medical invertory
router.post('/',CreateMed);

module.exports = router;