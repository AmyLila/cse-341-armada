exports.notFound = (reg, res, next) => {
    const err = new Error('This Page Can Not Be Displayed');
    err.status = 404;
    next(err);
};
