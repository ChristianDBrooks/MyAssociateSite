const mongojs = require("mongojs");

// Database configuration
// Save the URL of our database as well as the name of our collection
var databaseUrl = "<dbuser>:<dbpassword>@ds219095.mlab.com:19095/heroku_b2lxb6hl";
var collections = ["associates"];
// Use mongojs to hook the database to the db variable
const db = mongojs(databaseUrl, collections);

// This makes sure that any errors are logged if mongodb runs into an issue
db.on("error", function (error) {
    console.log("Database Error:", error);
});


const apiRoutes = function (app) {

    app.get("/api/all", (req, res) => {
        db.associates.find({}, function (err, found) {
            if (err) {
                console.log(err);
            }
            else {
                res.json(found);
            }
        });
    });

    app.get("/api/associate/id/:id", (req, res) => {
        db.associates.findOne({
            _id: mongojs.ObjectId(req.params.id)
        }, function (err, result) {
            if (err) {
                console.log(err)
            }
            return res.send(result);
        })
    })

    app.get("/api/associate/name/:name", (req, res) => {
        db.associates.findOne({ first: req.params.name }, function (err, found) {
            if (err) {
                console.log(err)
            }
            return res.send(found);
        });
    })

    app.post("/api/associate", (req, res) => {
        db.associates.insert(req.body, function (err, docs) {
            if (err) {
                console.log(err);
            }
        })
        res.status(200).end();
    });
}

module.exports = apiRoutes;