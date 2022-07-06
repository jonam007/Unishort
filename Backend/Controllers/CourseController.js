let Course = require('../View/Coursemodel')

const  courses = ((req,res)=>{
    Course.find()
    .then(uni => res.json(uni))
    .catch(err => res.status(400).json('Error:'+err))
})

module.exports={
    courses
}