const getCountries = require('../controllers/getCountries');
const getCountriesbyId = require('../controllers/getCountriesbyId');
const getCountriesbyName = require('../controllers/getCountriesbyName');
const createActivity = require('../controllers/postActivities');
const getActivities = require('../controllers/getActivities');

const { Router } = require("express");
const router = Router();

router.get('/countries', getCountries);
router.get('/countries/:name', getCountriesbyName);
router.get('/countries/:id', getCountriesbyId);
router.get('/activities', getActivities); 
router.post('/activities', createActivity);

module.exports = router;