const controller = require('../controllers/users');
const router = require('express').Router();
// Destructure authMiddleware from the imported controller
const { authMiddleware } = require('../controllers/users');

// Public routes (no authentication required)
router.post('/register', controller.createUser);
router.post('/login', controller.loginUser);

// Protected routes (authentication required)
router.use(authMiddleware);

// CRUD Routes /users
router.get('/', controller.getUsers); // /users
router.get('/:userId', controller.getUser); // /users/:userId
//router.post('/', controller.createUser); // /users
router.put('/:userId', controller.updateUser); // /users/:userId
router.delete('/:userId', controller.deleteUser); // /users/:userId

module.exports = router;