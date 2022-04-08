

let manageRequest = require("../models/salaryRequests.model");
let totalAttendance = require("../models/totalAttendance.model");

const manageSalaryRequest =async (req, res) => {
///////////--------------ATTENDANCE TIME OUT-----------------\\\\\\\\\\\\\\\\\\\\\



const salary = req.body.salary;
const email = req.body.email;
const choose = req.body.choose;

const presents  = req.body.presents;
const absents  = req.body.absents;
const manage  = req.body.manage;
const name  = req.body.name;
const position  = req.body.position;



  //UPDATING TIME OUT 
  manageRequest.findOneAndUpdate({
    $and: [

      { 
          
        email: { $eq: email },
        status: { $eq: "In process" }
    
    
    }
   

    ]
  }, { $set: { salary: salary, status: choose} }, { new: true }, (err, doc) => {
    if (err) {
        res.status(400).json({ message: "REQUEST ALREADY MANAGED!" })
    } else {


                    //UPDATING TIME OUT 
                    totalAttendance.findOneAndUpdate({
                    $and: [

                    { 
                        
                        email: { $eq: email }
                    
                    
                    }
                

                    ]
                }, { $set: { status: "In process" , overallTotalHours:0,overallTotalDays:0  } }, { new: true }, (err, doc) => {
                    if (err) {
                        res.status(400).json("UPDATING REQUEST ERROR!" )
                    } else{
                      console.log("success")

                      ////////////// SEND EMAIL ABOUT THE REQUEST

                      ///// MONTH OF SALARY
                      const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
                                            
                      const d = new Date();
                      let monthValue = month[d.getMonth()];
                      
                      const sgMail =   require('@sendgrid/mail')

                      const API_KEY ="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"

                      sgMail.setApiKey(API_KEY)

                      const message = {
                      to:{
                        email:`${email}`,
                        name:`${email}`

                      },
                      from:{
                        email:"nalhubsys@gmail.com",
                        name:`Nalhub System`

                      },
                      templateId:"d-ad7d80b58f524f86bed932feb75979f9",
                      dynamicTemplateData:{
                        email:`${email}`,
                        status:`${choose}`,
                        date:`${monthValue}`,
                        manage:`${manage}`,
                        name:`${name}`,
                        position:`${position}`,
                        presents:`${presents}`,
                        absents:`${absents}`,
                        salary:`${salary}`


                      }
                      }

                      sgMail.send(message)
                      .then(response=>  console.log(" salary sent via email"))
                      .catch((error) =>console.log(error.message))
                      ////////////// ENDDDDDDDDDDDD


                      
                    }

                });

    
    }


  })

  .catch((err) => res.status(400).json("REQUEST ALREADY UPDATED")); // CATCH THE ERROR

}

module.exports = manageSalaryRequest;






