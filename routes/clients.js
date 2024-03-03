const controller = require('../controllers/clients');
const router = require('express').Router();

// CRUD Routes /cars
router.get('/', controller.getClients);
router.get('/:clientId', controller.getClient); 
router.post('/', controller.createClient);
router.put('/:clientId', controller.updateClient); 
router.delete('/:clientId', controller.deleteClient);

module.exports = router;