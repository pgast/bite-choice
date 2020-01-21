const request = require('request');

/*
This method returns a promise which gets resolved or rejected
based on the result from the API
*/

module.exports = {
    make_API_call : function(url) {
        return new Promise((resolve, reject) => {
            request(url, { json: true }, (err, res, body) => {
                if (err) reject (err)
                    resolve(body)
            });
        })
    }
}