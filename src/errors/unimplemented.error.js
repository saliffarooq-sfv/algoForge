const BaseError = require("./base.errors");
const { StatusCodes } = require ('http-status-codes');


class notImplemented extends BaseError {
    constructor(methodname){
        super("notimplemented", this.statusCode.NOT_IMPLEMENTED, `${methodname} not implemented`, {})
    }
}
module.exports = notImplemented;