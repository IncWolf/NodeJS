/**
 * Created by IncWolf on 09.10.2016.
 */

module.exports = {

    getHeaders: function (req, res) {

        res.send(req.headers);
    },

    getBody: function(req, res) {
        console.log(req.body);
        res.send(req.body.text);
    }
};
