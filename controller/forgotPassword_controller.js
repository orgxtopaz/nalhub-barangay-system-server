
let User = require("../models/user.model");

const forgot =async (req, res) => {
    const email = req.body.email;
  
    //CHECKING IF USER EXIST ON DATABASE
    User.find({ $and: [{ email: { $eq: email } },{ verified: { $eq: "true" } }] })
  
      /// VALIDATING IF USER EXIST
      .then(user => {
  
        if (user.length > 0) {
    
  
     
        
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
        templateId:"d-e20216fd77524d0fa38f18a9896101a1",
        dynamicTemplateData:{
          email:`${email}`,
          password:`${user[0].password}`,
          position:`${user[0].position}`,
 
        }
        }

        sgMail.send(message)
        .then(response=>  console.log(" Password reset sent via email"))
        .catch((error) =>console.log(error.message))
 
  
          res.json("Account details has been sent, Open your email now")
  
        } else {
          res.status(400).json("User did not exist")
        }
  
      })
  

}


module.exports = forgot;
