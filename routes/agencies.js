const controller = require('../controllers/agencies');
const carcontroller = require('../controllers/cars');
const router = require('express').Router();

// CRUD Routes /cars
router.get('/', controller.getAgencies);
router.get('/:agencyId', controller.getAgencyById); 
router.post('/', controller.createAgency);
router.put('/:agencyId', controller.updateAgency); 
router.delete('/:agencyId', controller.deleteAgency);


// Get all cars of a given agency
router.get('/:agencyId/cars', carcontroller.getCarsByAgency);

router.post('/:agencyId/cars', carcontroller.createCarWithAgency);
module.exports = router;