const router = require("express").Router();
let Feedback = require("../models/feedback");

//Add Feedback
router.route("/addFeedback").post(async(req,res)=>{

    const 
    {

    Comment,
    CustomerID,
    CoverID,
    
    }= req.body;
    

    const newFeedback = new Feedback({
      
        Comment,
        CustomerID,
        CoverID,
     
        
        
    })


    newFeedback.save().then(() => {

        res.status(201).json({ message: "Feedback Added Successfully!"});
     
    })
    .catch((err) => {
      
        console.log(err);
    
    });

}); 


//Get one feedback
router.route("/getFeedback").get(async (req,res) =>{

    const userID = req.body.CustomerID;
    const coverID = req.body.CoverID;

    try{
        
    const feedback = await Feedback.find({CustomerID:userID, CoverID:coverID})
        // res.status(200).send({status:"User fetched"});
        res.json(feedback);

    }catch(err){

        console.log(err.message);
        res.status(500).send({status : "Error with get user", error : err.message});
    }
});


//Get all feedbacks
router.route("/getAllFeedback").get((req ,res)=> {
    Feedback.find().then((feedbacks)=>{
        res.json(feedbacks)
        
    }).catch((err) =>{
        console.log(err)
    })
});


//Update

router.route("/updateFeedback/:id").put(async (req, res) => {
    
    let feedbackId = req.params.id;

    const
    { 
        Comment,
        CustomerID,
        CoverID,
        // UpdatedDateAndTime
    
    
    
    } = req.body;
  
    const updateFeedback = {

      Comment,
      CustomerID,
      CoverID,
      UpdatedDateAndTime : new Date()

    };
  
    const update = await Feedback.findByIdAndUpdate(feedbackId, updateFeedback)
      .then(() => {
        res.status(200).send({ status: "Successfully Updated" });
      })
      .catch((err) => {
        console.log(err);
        res
          .status(500)
          .send({ status: "Error with updating data", error: err.message });
      });
  });



//Delete
router.route("/deleteFeedback/:id").delete(async (req,res) =>{

    let feedbackId = req.params.id;

        await Feedback.findByIdAndDelete(feedbackId)
        .then(() => {
            res.status(200).send({status : "Feedback Deleted"});
        }).catch((err) => {

            console.log(err.message);
            res.status(500).send({status : "Error with delete", error : err.message});
        })
    });



module.exports = router;