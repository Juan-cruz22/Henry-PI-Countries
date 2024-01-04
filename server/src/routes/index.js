const getCountries = require('../controllers/getCountries');
const getCountriesbyId = require('../controllers/getCountriesbyId');
const getCountriesbyName = require('../controllers/getCountriesbyName');

const { Router } = require("express");
const router = Router();

router.get('/countries', getCountries);
router.get('/countries/:id', getCountriesbyId);
router.get('/countries/name/:name', getCountriesbyName); // Cambiar a /countries/name/:name

module.exports = router;