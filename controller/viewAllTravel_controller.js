let travelLog = require("../models/travellogs.model");

const displayAllTravel =async (req, res) => {
    
    const sort = { _id: -1 };
    travelLog.find().sort(sort) // PROMISE IF ELSE
    .then((travel) => res.json(travel)) // IF TRUE CHECK
    .catch((err) => res.status(400).json("Error : " + err)); // IF ERROR

}


module.exports = displayAllTravel;
