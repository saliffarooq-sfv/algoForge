const BaseError = require('../errors/base.errors')

const { StatusCodes } = require('http-status-codes');


function errorHandler(err, req, res, next){
    console.log("CAUGHT ERROR:", err);
    if (err instanceof BaseError){
        return res.status(err.statusCode).json({
            succes:false,
            message:err.message,
            error: err.details,
            data:{}
        });
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            succes:false,
            message:"something went wrong",
            error: err,
            data:{}
    })
}

module.exports = errorHandler;