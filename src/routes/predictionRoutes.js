const express = require('express');
const { predict } = require('../controllers/predictionController');
const { upload } = require('../middlewares/fileUpload');

const router = express.Router();

router.post('/upload', upload.single('image'), predict);

module.exports = router;
