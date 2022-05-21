

let Attendance = require("../models/attendance.model");

const displayAttendance =async (req, res) => {


////DISPLAYING THE ATTENDACE SPECIFIC OFFICIAL
    const email = req.body.email;
  const sort = { _id: -1 };
  
    Attendance.find(  
  
      { email: { $eq: email } }
   
  
    ).sort(sort) // PROMISE IF ELSE
      
      .then((attendance) => res.status(200).json(attendance)) // IF TRUE CHECK
      .catch((err) => res.status(400).json("Error : " + err)); // IF ERROR


}

module.exports = displayAttendance;






