const dbConn = require("../../../config/database");

var institute_model = {


    async add_institute(req, res) {
        try {



            if (req.class_category === 'Higher Secondary' && !(req.standard === '8th' || req.standard === '9th' || req.standard === '10th')) {
                return res.status(200).json({ message: "Must Select 8th, 9th or 10th standard for Higher Secondary" });
            }
            if (req.class_category === 'Pre-primary' && !(req.standard === 'LKG' || req.standard === 'HKG')) {
                return res.status(200).json({ message: "Must Select LKG or HKG standard for Pre-primary" });
            }


            var data = {
                'organization_type': req.organization_type,
                'board': req.board != undefined ? req.board : '',
                'medium': req.medium != undefined ? req.medium : '',
                'class_category': req.class_category != undefined ? req.class_category : '',
                'standard': req.standard != undefined ? req.standard : '',
                'subjects': req.subjects != undefined ? req.subjects : '',
                'university': req.university != undefined ? req.university : '',
                'degree': req.degree != undefined ? req.degree : '',
            };

            const [rows, fields] = await dbConn.query("INSERT INTO tbl_institute SET ?", [data]);

            if (rows.affectedRows > 0) {
                var institute_id = rows.insertId;
                return res.status(200).json({ message: "Institute registered successfully." });
            } else {
                return res.status(401).json(null);
            }
        } catch (error) {
            return res.status(401).json(error);
        }
    }

};

module.exports = institute_model;