

let travelLog = require("../models/travellogs.model");

const displaySpecificTravelLog =async (req, res) => {

////DISPLAY ALL TRAVEL LOGS WITH THE SPECIFIC OFFICIAL
 const sort = { _id: -1 };
   
    const email = req.body.email;
  
  
    travelLog.find(  
  
      { email: { $eq: email } }
   
  
    ).sort(sort) // PROMISE IF ELSE
      
      .then((travelLog) => res.status(200).json(travelLog)) // IF TRUE CHECK
      .catch((err) => res.status(400).json("Error : " + err)); // IF ERROR

  

}

module.exports = displaySpecificTravelLog;






