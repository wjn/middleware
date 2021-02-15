"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireAuth = void 0;
var errors_1 = require("@nielsendigital/errors");
var requireAuth = function (req, res, next) {
    // assumes currentUser middleware has already run.
    if (!req.currentUser) {
        throw new errors_1.NotAuthorizedError();
    }
    next();
};
exports.requireAuth = requireAuth;
