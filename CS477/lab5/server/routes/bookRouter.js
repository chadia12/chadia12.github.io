"use strict";
/*eslint-disable*/
const express = require('express');
const bookContr = require('../controllers/bookController');

const router = express.Router();

router.get('/',bookContr.getAll);
router.get('/:id', bookContr.getById);
router.post('/', bookContr.save);
router.put('/:id',bookContr.update);
router.delete('/:id',bookContr.deleteById);

module.exports = router;