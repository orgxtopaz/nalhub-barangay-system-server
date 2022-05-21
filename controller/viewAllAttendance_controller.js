let Attendance = require("../models/attendance.model");

const displayAllAttendance =async (req, res) => {
        const sort = { _id: -1 };

    Attendance.find().sort(sort) // PROMISE IF ELSE
    .then((attendance) => res.json(attendance)) // IF TRUE CHECK
    .catch((err) => res.status(400).json("Error : " + err)); // IF ERROR

}


module.exports = displayAllAttendance;
