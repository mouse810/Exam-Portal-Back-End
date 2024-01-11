const Handler = require('../handlers');
const APP_CONSTANTS = require('../constant/APP_CONSTANTS');
const universalFunction = require('../lib/universal-function');

module.exports.createCourse = async function (req, res) {
    try {

        req.body.examinerID = req.loggedUser.id;
        const response = await Handler.examiner.createCourse(req);
        return universalFunction.sendResponse(res, response.status, response.message, response.data);

    } catch (error) {

        return universalFunction.errorResponse(res, error);

    }
};

module.exports.addSubjects = async function (req, res) {
    try {

        const response = await Handler.examiner.addSubjects(req);
        return universalFunction.sendResponse(res, response.status, response.message, response.data);

    } catch (error) {

        return universalFunction.errorResponse(res, error);

    }
};

module.exports.allStudents = async function (req, res) {
    try {

        const response = await Handler.examiner.getAllStudents(req);
        return universalFunction.sendResponse(res, response.status, response.message, response.data);

    } catch (error) {

        return universalFunction.errorResponse(res, error);

    }
}

module.exports.addStudent = async function (req, res) {
    try {

        req.body.examinerID = req.loggedUser.id;
        const response = await Handler.examiner.addStudent(req);
        return universalFunction.sendResponse(res, response.status, response.message, response.data);

    } catch (error) {

        return universalFunction.errorResponse(res, error);

    }
}


module.exports.createStudent = async function (req, res) {
    try {

        req.body.userType = APP_CONSTANTS.ACCOUNT_TYPE.STUDENT;
        req.body.status = APP_CONSTANTS.ACCOUNT_STATUS.APPROVED;
        req.body.examinerID = req.loggedUser.id;
        const response = await Handler.examiner.createStudent(req);
        return universalFunction.sendResponse(res, response.status, response.message, response.data);

    } catch (error) {

        return universalFunction.errorResponse(res, error);

    }
};

module.exports.getDashboard = async function (req, res) {
    try {

        const response = await Handler.examiner.getDashboard(req);
        return universalFunction.sendResponse(res, response.status, response.message, response.data);

    }
    catch (error) {

        return universalFunction.errorResponse(res, error);

    }
};

module.exports.getStudents = async function (req, res) {
    try {

        req.query.examinerID = req.loggedUser.id;
        const response = await Handler.examiner.getStudents(req);
        return universalFunction.sendResponse(res, response.status, response.message, response.data);

    }
    catch (error) {

        return universalFunction.errorResponse(res, error);

    }
}

module.exports.getSubjects = async function (req, res) {
    try {

        req.query.examinerID = req.loggedUser.id;
        const response = await Handler.examiner.getSubjects(req);
        return universalFunction.sendResponse(res, response.status, response.message, response.data);

    }
    catch (error) {
        return universalFunction.errorResponse(res, error);
    }
}

module.exports.createExam = async function (req, res) {
    try {

        req.body.examinerID = req.loggedUser.id;
        const response = await Handler.examiner.createExam(req);
        return universalFunction.sendResponse(res, response.status, response.message, response.data);

    }
    catch (error) {
        return universalFunction.errorResponse(res, error);
    }
}

module.exports.getExams = async function (req, res) {
    try {

        req.query.examinerID = req.loggedUser.id;
        const response = await Handler.examiner.getExams(req);
        return universalFunction.sendResponse(res, response.status, response.message, response.data);

    } catch (error) {

        return universalFunction.errorResponse(res, error);

    }
}

module.exports.deleteSubject = async function (req,res) {

    try{
          
        const response = await Handler.examiner.deleteSubject(req);
        return universalFunction.sendResponse(res, response.status, response.message, response.data);

    } catch(error) {
       
        return universalFunction.errorResponse(res, error);
    }

}

module.exports.deleteExam = async function (req,res) {

    try{
          
        const response = await Handler.examiner.deleteExam(req);
        return universalFunction.sendResponse(res, response.status, response.message, response.data);

    } catch(error) {
       
        return universalFunction.errorResponse(res, error);
    }

}

module.exports.updateExam = async function (req,res) {

    try{
          
        const response = await Handler.examiner.updateExam(req);
        return universalFunction.sendResponse(res, response.status, response.message, response.data);

    } catch(error) {
       
        return universalFunction.errorResponse(res, error);
    }

}

module.exports.updateQuestion = async function (req,res) {

    try{
          
        const response = await Handler.examiner.updateQuestion(req);
        return universalFunction.sendResponse(res, response.status, response.message, response.data);

    } catch(error) {
       
        return universalFunction.errorResponse(res, error);
    }

}

module.exports.updateSubject = async function (req,res) {

    try{
          
        const response = await Handler.examiner.updateSubject(req);
        return universalFunction.sendResponse(res, response.status, response.message, response.data);

    } catch(error) {
       
        return universalFunction.errorResponse(res, error);
    }

}

module.exports.updateCourse = async function (req,res) {

    try{
          
        const response = await Handler.examiner.updateCourse(req);
        return universalFunction.sendResponse(res, response.status, response.message, response.data);

    } catch(error) {
       
        return universalFunction.errorResponse(res, error);
    }

}


module.exports.deleteCourse = async function (req,res) {

    try{
          
        const response = await Handler.examiner.deleteCourse(req);
        return universalFunction.sendResponse(res, response.status, response.message, response.data);

    } catch(error) {
       
        return universalFunction.errorResponse(res, error);
    }

}

module.exports.deleteStudent = async function (req,res) {

    try{
          
        const response = await Handler.examiner.deleteStudent(req);
        return universalFunction.sendResponse(res, response.status, response.message, response.data);

    } catch(error) {
       
        return universalFunction.errorResponse(res, error);
    }

}

module.exports.deleteQuestion = async function (req,res) {

    try{
          
        const response = await Handler.examiner.deleteQuestion(req);
        return universalFunction.sendResponse(res, response.status, response.message, response.data);

    } catch(error) {
       
        return universalFunction.errorResponse(res, error);
    }

}

module.exports.declareResult = async function (req,res) {

    try{
          
        const response = await Handler.examiner.declareResult(req);
        return universalFunction.sendResponse(res, response.status, response.message, response.data);

    } catch(error) {
       
        return universalFunction.errorResponse(res, error);
    }

}

module.exports.getResult = async function (req,res) {

    try{
          
        const response = await Handler.examiner.getResult(req);
        return universalFunction.sendResponse(res, response.status, response.message, response.data);

    } catch(error) {
       
        return universalFunction.errorResponse(res, error);
    }

}

module.exports.removeExamStudent = async function (req,res) {
    try{
          
        const response = await Handler.examiner.removeExamStudent(req);
        return universalFunction.sendResponse(res, response.status, response.message, response.data);

    } catch(error) {
       
        return universalFunction.errorResponse(res, error);
    }
}