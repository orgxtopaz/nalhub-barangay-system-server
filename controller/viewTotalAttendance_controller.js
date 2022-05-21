let totalAttendance = require("../models/totalAttendance.model");

const viewTotalAttendance =async (req, res) => {
      const sort = { _id: -1 };
    totalAttendance.find().sort(sort)  // PROMISE IF ELSE
    .then((totalAttendance) => res.json(totalAttendance)) // IF TRUE CHECK
    .catch((err) => res.status(400).json("Error : " + err)); // IF ERROR

}


module.exports = viewTotalAttendance;
