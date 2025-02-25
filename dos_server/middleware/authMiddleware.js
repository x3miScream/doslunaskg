const jwt = require('jsonwebtoken');

const processAuth = async (req, res, next) => {
    console.log('in auth middleware');
    next();
};

module.exports = {
    processAuth
};