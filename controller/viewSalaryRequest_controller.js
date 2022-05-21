

let salaryRequests = require("../models/salaryRequests.model");

const displaySalaryRequest =async (req, res) => {
const sort = { _id: -1 };
////DISPLAY ALL TRAVEL LOGS WITH THE SPECIFIC OFFICIAL

    const position = req.body.position;
  
  
    salaryRequests.find(  
  
      { requestTo: { $eq: position } }
   
  
    ).sort(sort) // PROMISE IF ELSE
      
      .then((requestLog) => res.status(200).json(requestLog)) // IF TRUE CHECK
      .catch((err) => res.status(400).json("Error : " + err)); // IF ERROR

  

}

module.exports = displaySalaryRequest;






