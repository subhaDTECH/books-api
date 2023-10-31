const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.get('/', bookController.getAllBooks);
router.post('/add', bookController.createBook);
router.get('/:id', bookController.getBookByID);
router.put('/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);

// Define routes for updating and deleting books

module.exports = router;
