var express = require('express');
var router = express.Router();

const skillsCtrl = require('../controllers/skills');

router.get('/', skillsCtrl.index);
router.get('/new', skillsCtrl.new);
router.get('/:name', skillsCtrl.show);
router.post('/', skillsCtrl.create);
router.delete('/:name', skillsCtrl.delete);
router.put('/:name', skillsCtrl.edit);

module.exports = router;