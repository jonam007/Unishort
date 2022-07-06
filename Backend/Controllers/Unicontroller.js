let Universities = require('../View/usunimodel')

const  university = ((req,res)=>{
    Universities.find()
    .then(uni => res.json(uni))
    .catch(err => res.status(400).json('Error:'+err))
})


module.exports={
    university
}