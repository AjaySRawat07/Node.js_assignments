const jobModel = require("../model/job.model");


const jobCreate = async(req,res)=> {
    try{
        console.log(req.body);
        //Insert data into db
        const jobObj = {
            ...req.body,
            isVacant : true
        }

        const response = await jobModel.create(jobObj);
        console.log(response);

        res.json({
            success : true,
            message : `Job Created Successfully with id ${response._id}` 
        })
    }
    catch(err){
        console.log("ERROR WHILE CREATING JOB POST : ",err);
    }
}

const jobList = (req,res)=>{
    res.json({
        success : true,
        message : "Job detail get successfully",
    })
}

const jobEdit = (req,res)=>{
    res.json({
        success : true,
        message : "Job edit successfully",
    })
}

const jobDelete = (req,res)=>{
    res.json({
        success : true,
        message : "Job deleted successfully",
    })
}

const jobController = {
    jobList,
    jobCreate,
    jobDelete,
    jobEdit
}

module.exports = jobController;