

let viewAllSalaryRequests = require("../models/salaryRequests.model");

const displayAllSalaryRequest =async (req, res) => {

////DISPLAY ALL TRAVEL LOGS WITH THE SPECIFIC OFFICIAL

   const sort = { _id: -1 };
  
    viewAllSalaryRequests.find().sort(sort) 
  // PROMISE IF ELSE
      
      .then((requestLog) => res.status(200).json(requestLog)) // IF TRUE CHECK
      .catch((err) => res.status(400).json("Error : " + err)); // IF ERROR

  

}

module.exports = displayAllSalaryRequest;
