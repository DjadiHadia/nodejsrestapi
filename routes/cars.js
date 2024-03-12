const controller = require('../controllers/cars');
const router = require('express').Router();

// CRUD Routes /cars
router.get('/', controller.getCars);
router.get('/:carId', controller.getCar); 
router.post('/', controller.createCar);
router.put('/:carId', controller.updateCar); 
router.delete('/:carId', controller.deleteCar);

module.exports = router;