const controller = require('../controllers/cars');
const router = require('express').Router();

// CRUD Routes /cars
router.get('/', controller.getCars);
router.get('/:carId', controller.getCar); 
router.post('/', controller.createCar);
router.put('/:carId', controller.updateCar); 
router.delete('/:carId', controller.deleteCar);
// Get all cars of a given agency
router.get('/agency/:agencyId', controller.getCarsByAgency);
module.exports = router;