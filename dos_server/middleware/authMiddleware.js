const jwt = require('jsonwebtoken');

const processAuth = async (req, res, next) => {
    next();
};

module.exports = {
    processAuth
};