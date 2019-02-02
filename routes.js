// const mailer = require("./mailer");
// const data = require('./associate.js')
const routes = function (app) {

    app.get("/form", (req, res) => {
        res.render("form");
    })

    app.get("/success", (req, res) => {
        res.render("success");
    })

    app.get("/", (req, res) => {
        res.render("index");
    })

    app.get("*", (req, res) => {
        res.render("index");
    })

}

module.exports = routes;