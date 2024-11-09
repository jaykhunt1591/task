const Validator = require('Validator');
const dbConn = require("../config/database");


const common = {
    //check Validation Rules
    checkValidationRules: async (request, rules) => {
        try {
            let v = Validator.make(request, rules);
            let _validator = {
                status: true,
            }
            if (v.fails()) {
                let Validator_errors = v.getErrors();
                _validator.status = false
                for (let key in Validator_errors) {
                    _validator.error = Validator_errors[key][0];
                    break;
                }
            }
            return _validator;
        } catch (error) {
            return error;
        }

    },
};

module.exports = common;