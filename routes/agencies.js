const controller = require('../controllers/agencies');
const router = require('express').Router();

// CRUD Routes /cars
router.get('/', controller.getAgencies);
router.get('/:agencyId', controller.getAgencyById); 
router.post('/', controller.createAgency);
router.put('/:agencyId', controller.updateAgency); 
router.delete('/:agencyId', controller.deleteAgency);

module.exports = router;