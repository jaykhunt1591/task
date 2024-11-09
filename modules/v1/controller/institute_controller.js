const institute_model = require("../models//institute_model");
const common = require("../../../config/common");

exports.add_institute = async (req, res) => {
    var request = req.body;
    // console.log(request.board);
    var rules = {
        organization_type: "required",
        board: "required_if:organization_type,School",
        medium: "required_if:organization_type,School",
        class_category: "required_if:organization_type,School",
        standard: "required_if:organization_type,School",
        subjects: "required_if:organization_type,School",
        university: "required_if:organization_type,College",
        degree_type: "required_if:organization_type,College"
    }

    let valid = await common.checkValidationRules(request, rules);
    // console.log("valid", valid);

    if (valid.status) {
        return institute_model.add_institute(request, res)
    }
    else {

        const response = {
            code: 0,
            message: valid.error,
            data: []
        }
        return res.status(401).json(response);
    }
}
