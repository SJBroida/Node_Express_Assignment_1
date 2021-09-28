function validateZip(req, res, next) {

    const theZip = req.params.zip;
    const theNumber = parseInt(theZip);
    if( theZip.length === 5 && Number.isInteger(theNumber) ) {
        next();
    } else {
        next(`Zip (${theZip}) is invalid!`);
    }

}

module.exports = validateZip;
