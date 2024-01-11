const joi = require('joi');

module.exports.userLoginSchema = {

    body: joi.object({
        email: joi.string().email().required(),
        password: joi.string().required()
    })
    
};

module.exports.userRegistrationSchema = {

    body: joi.object({
        firstName: joi.string().required(),
        lastName: joi.string().optional(),
        email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required().lowercase(),
        mobileNumber: joi.string().min(10).max(12).required(),
        password: joi.string().min(6).required()
    })
    
};

module.exports.profileUpdateSchema = {

    body: joi.object({
        firstName: joi.string().optional(),
        lastName: joi.string().optional(),
        password: joi.string().min(6).optional(),
        mobileNumber: joi.string().min(10).max(12).optional()
    })
    
};