const handleExceptions = async (err, req, res, next) => {
    try{
        if (! err) {
            return next();
        }
    
        res.status(500);
        res.send('500: Internal server error');
    }
    catch(error){
        return res.status(500).json({messages: error.message});
    }
};

module.exports = {
    handleExceptions
}