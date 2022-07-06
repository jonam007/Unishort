let Scholarship = require('../View/ScholarModel')

const  scholar = ((req,res)=>{
    Scholarship.find()
    .then(uni => res.json(uni))
    .catch(err => res.status(400).json('Error:'+err))
})


module.exports={
    scholar
}