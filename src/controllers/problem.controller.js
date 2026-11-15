const { StatusCodes } = require('http-status-codes');
const BadRequest = require('../errors/badRequest.errors');



function pingController(req,res,next){
    return res.json({message: "problem controller is up"})
}




function addProblem(req, res,next){
      try{
        //Nothing implemented
        throw new BadRequest('Problem name' , {missing  : ['problem Name']})
    } catch(error){
        next(error);
    }
}


function getProblem(req, res){
   
}


function getProblems(req, res){

}


function deleteProblem(req, res){
}


function updateProblem(req, res){
}


module.exports = {
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
    pingController

}
