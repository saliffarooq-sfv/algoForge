
const BadRequest = require('../errors/badRequest.errors');
const { ProblemService} = require('../services');
const { ProblemRepository } = require('../repositories');
const { StatusCodes } = require('http-status-codes');

const problemService = new ProblemService(new ProblemRepository());

function pingController(req,res,next){
    return res.json({message: "problem controller is up"})
}




async function addProblem(req, res,next){
      try{
          const newproblem = await problemService.createProblem(req.body);
          return res.status(StatusCodes.CREATED).json({
            success: true,
            message:"sucessfully created a new problem",
            error:{},
            data: newproblem
          })
    } catch(error){
        next(error);
    }
}


async function getProblem(req, res, next){
    try {
        const problem = await problemService.getProblem(req.params.id)
        return res.status(StatusCodes.OK).json({
                success: true,
                message:"sucessfully fetched the problem",
                error:{},
                data: problem
        })
    }catch(error){
        next(error);
    }
   
}


async function getProblems(req, res, next){
        try {
        const response = await problemService.getProblems();
        return res.status(StatusCodes.OK).json({
                success: true,
                message:"sucessfully fetched all the problems",
                error:{},
                data: response
        })
        } catch (error) {
            next(error);
        }
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
