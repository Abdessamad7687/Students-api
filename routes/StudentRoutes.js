const express = require('express');
const router = express.Router();
const studentController = require('../controllers/StudentController');

// Create a new student
router.post('/', studentController.create);

// Get all 
router.get('/', studentController.getAll);

// Get a specific student by ID
router.get('/:id', studentController.getById);

// Update a specific student by ID
router.put('/:id', studentController.updateById);

// Delete a specific student by ID
router.delete('/:id', studentController.deleteById);

module.exports = router;