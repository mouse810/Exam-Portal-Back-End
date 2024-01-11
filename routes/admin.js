const router = require('express').Router();
const { admin, user } = require('../controllers');
const { ACCOUNT_TYPE } = require('../constant/APP_CONSTANTS');
const { actionSchema, deleteSchema, getExaminerSchema } = require('../validations/admin');
const { validate, authorize } = require('../middelwares');
const { profileUpdateSchema } = require('../validations/user');

router.use(authorize(ACCOUNT_TYPE.ADMIN));
router.get('/dashboard', admin.getDashboard);
router.get('/examiners', validate(getExaminerSchema), admin.getExaminers);
router.patch('/profile', validate(profileUpdateSchema), user.updateProfile);
router.put('/examiner', validate(actionSchema), admin.approveOrDeclineExaminer);
router.delete('/examiner/:examinerID', validate(deleteSchema), admin.deleteExaminer);

module.exports = router;