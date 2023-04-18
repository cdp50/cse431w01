const myName = (req, res, next) => {
    res.json('Claudio Parra');
};

const myWifeName = (req, res, next) => {
    res.json('Fran Parra');
};



module.exports = {myName, myWifeName}