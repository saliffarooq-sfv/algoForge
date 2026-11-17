const BaseError = require("./base.errors");
const { StatusCodes } = require ('http-status-codes');


class NotFound extends BaseError {
    constructor(resourceName, resourcevalue){
        super("NotFouund", StatusCodes.NOT_FOUND, `The requested ${resourceName} with value ${resourcevalue} could not be found` , {
            resourceName,
            resourcevalue
        });
            
    }
}
module.exports = NotFound;