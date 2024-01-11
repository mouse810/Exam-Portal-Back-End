const mongoose = require("mongoose");
const APP_CONSTANTS = require("../constant/APP_CONSTANTS");
const Model = require("../models");
const statusCodeList = require("../statusCodes/statusCodes");
const statusCodes = statusCodeList.STATUS_CODE;
const messageList = require("../messages/messages");
const universalFunction = require("../lib/universal-function");
const messages = messageList.MESSAGES;

module.exports.getDashboard = async function (req) {
  try {
    let adminDetails = req.loggedUser;
    return {
      status: statusCodes.SUCCESS,
      message: messages.DASHBOARD_LOADED_SUCCESSFULLY,
      data: {
        adminDetails: adminDetails
      }
    };
  } catch (error) {
    throw error;
  }
};

module.exports.getExaminers = async function (req) {
  try {
    let payload = req.query;
    let limit = payload.pageSize ? payload.pageSize : 5;
    let skip = payload.pageIndex ? payload.pageIndex * limit : 0;
    let query = {
      $and: [
        { userType: APP_CONSTANTS.ACCOUNT_TYPE.EXAMINER }
      ]
    };
    if (payload.status == "pending") query.$and.push({ status: APP_CONSTANTS.ACCOUNT_STATUS.PENDING });
    else if (payload.status == "approved") query.$and.push({ status: APP_CONSTANTS.ACCOUNT_STATUS.APPROVED });
    else if (payload.status == "declined") query.$and.push({ status: APP_CONSTANTS.ACCOUNT_STATUS.DECLINED });
    let projection = {
      password: 0,
      userType: 0
    };
    let sortBy = {};
    if(payload.sortBy) sortBy[payload.sortBy] = payload.order || 1;
    else sortBy.updatedOn = -1;
    if(payload.search) query.$and.push(
      {
        $or:[
          {
            email:{$regex:payload.search,$options:"i"}
          },
          {
            firstName:{$regex:payload.search,$options:"i"}
          },
          {
            lastName:{$regex:payload.search,$options:"i"}
          },
          {
            mobileNumber:{$regex:payload.search,$options:"i"}
          }
        ]
    });
    let count = await Model.users.countDocuments(query);
    let Examiners = await Model.users.find(query, projection).skip(skip).limit(limit).sort(sortBy);
    return {
      status: statusCodes.SUCCESS,
      message: messages.SUCCESS,
      data: {
        totalPages: Math.ceil(count/limit),
        Examiners: Examiners
      }
    };
  } catch (error) {
    throw error;
  }
};


module.exports.approveOrDeclineExaminer = async function (req) {
  try {
    let payload = req.body;
    let _id = mongoose.Types.ObjectId(payload.examinerID);
    let fieldsToUpdate = {
      status: payload.action,
      updatedOn: new Date(Date.now())
    };
    let options = {
      new: true,
      projection: {
        password: 0
      }
    };
    let updatedExaminer = await Model.users.findByIdAndUpdate(_id, fieldsToUpdate, options);
    let message = (updatedExaminer.status == APP_CONSTANTS.ACCOUNT_STATUS.APPROVED) ? messages.USER_APPROVED_SUCCESSFULLY : messages.USER_DECLINED_SUCCESSFULLY;
    return {
      status: statusCodes.SUCCESS,
      message: message
    }
  } catch (error) {
    throw error;
  }
};


module.exports.deleteExaminer  = async function(req) {
  try{
    let payload = req.params;
    let _id = mongoose.Types.ObjectId(payload.examinerID);
    await Model.users.findByIdAndUpdate(_id,{status:APP_CONSTANTS.ACCOUNT_STATUS.DELETED});
    return {
      status: statusCodes.SUCCESS,
      message: messages.USER_DELETED_SUCCESSFULLY
    }
  }
  catch (error) {
    throw error;
  }
};