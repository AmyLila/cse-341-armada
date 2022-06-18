//This is an error that is thrown if the wrong route is entered
exports.notFound = (reg, res, next) => {
    const err = new Error('This Page Can Not Be Displayed');
    err.status = 404;
    next(err);
};


exports.catchErrors = (fn) => {
    return function (req, res, next) {
        return fn(req, res,next).catch(next);
    };
};