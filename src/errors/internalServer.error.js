const BaseError = require("./base.errors");
const { StatusCodes } = require ('http-status-codes');


class InternalServerError extends BaseError {
    constructor(details){
        super("InternalServerError", statusCode.INTERNAL_SERVER_ERROR, `something went wrong !!`, details)
    }
}
module.exports = InternalServerError;