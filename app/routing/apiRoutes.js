var friendData = require('../data/friends.js');

module.exports = function(app) {

    app.get('/api/friends', function(req,res) {
        res.json(friendData);
    });

    app.post('/api/friends',function (req,res) {
        console.log(req.body);
        var userDataScores = req.body;
        console.log(userDataScores);
        // extract scores of friendData
        // loop through friendData scores and userDataScores generating delta at each question
        // throw sum of deltas into array
        // determine index of smallest delta Math.min.apply(null, arr);
        // use index of smallest delta to determine matched friend.
        // return picture and and name of closets match

        
        
        
        friendData.push(req.body);
        
    });
}