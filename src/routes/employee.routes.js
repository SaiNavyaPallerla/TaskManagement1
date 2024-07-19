const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employee.controllers');

router.get('/get-employees', employeeController.getAllEmployees);
router.post('/post-employees', employeeController.addEmployee);

module.exports = router;
