const router = require('express').Router();
const { student } = require('../controllers');
const { ACCOUNT_TYPE } = require('../constant/APP_CONSTANTS');
const { validate, authorize } = require('../middelwares');
const { accessExamSchema, answerSchema, getQuestionSchema, submitExamSchema } = require('../validations/student');

router.use(authorize(ACCOUNT_TYPE.STUDENT));
router.get('/dashboard', student.getDashboard);
router.get('/exams', student.getExams);
router.get('/examRecords', student.getExamRecords);
router.get('/results', student.getResult);
router.get('/questions', validate(getQuestionSchema), student.getQuestions);
router.post('/accessExam', validate(accessExamSchema), student.accessExam)
router.post('/answer', validate(answerSchema), student.submitAnswer);
router.post('/exam', validate(submitExamSchema), student.submitExam);

module.exports = router;