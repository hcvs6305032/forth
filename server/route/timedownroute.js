const express =require('express');
const { start, stop } =require('../api/timedown');
const router = express.Router();

router.post('/timedown/start', start);
router.post('/timedown/stop', stop);

module.exports =router;