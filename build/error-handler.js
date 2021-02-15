"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
var errors_1 = require("@nielsendigital/errors");
var logit_1 = require("@nielsendigital/logit");
// Create a consistent error response for all services.
var errorHandler = function (err, req, res, next) {
    if (err instanceof errors_1.CustomError) {
        return res.status(err.statusCode).send({ errors: err.serializeErrors() });
    }
    // Unexpected errors get logged
    logit_1.logIt.out(logit_1.LogType.ERROR, err);
    return res.status(400).send({
        errors: [{ message: 'Something went wrong. Error not recognized.' }],
    });
};
exports.errorHandler = errorHandler;
