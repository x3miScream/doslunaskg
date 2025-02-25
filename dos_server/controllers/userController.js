const testUserControllerGet = async (req, res) => {
    return res.status(200).json({messages: ["Hi from GET iScream"]});
};


const testUserControllerPost = async (req, res) => {
    return res.status(200).json({messages: ["Hi from POST iScream"]});
};

module.exports = {
    testUserControllerGet,
    testUserControllerPost
}