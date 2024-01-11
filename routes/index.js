const router = require('express').Router();

router.use('/user',require('./user'));
router.use('/admin',require('./admin'));
router.use('/examiner',require('./examiner'));
router.use('/student',require('./student'));

module.exports = router;