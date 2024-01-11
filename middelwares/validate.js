const universalFunction = require("../lib/universal-function");

module.exports = function (schema) {

    return function (req, res, next) {
        try {
            if (schema.body) {
                const { error, value } = schema.body.validate(req.body);
                if (error) throw error;
                req.body = value;
                next()
            }
            else if(schema.query) {
                const { error, value } = schema.query.validate(req.query);
                if (error) throw error;
                req.query = value;
                next()
            }
            else {
                const { error, value } = schema.params.validate(req.params);
                if (error) throw error;
                req.params = value;
                next()
            }
        } catch (error) {
            return universalFunction.validationError(res, error);
        }
    }
}