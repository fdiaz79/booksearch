require("dotenv").config();
const axios = require("axios");
const db = require("../models");
const path = require("path");

module.exports = function(app) {
    app.get("/api/books", (req, res) => {
        db.Book.find().then(
            (booksData) => {
                res.json(booksData);
            }
        ).catch(
            (err) => {
                res.json(err);
            }
        );
    });

    app.post("/search", (req, res) => {
        
        let title = req.body.title.replace(/\s/g, "+");
        axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=${title}&key=${process.env.GOOGLEKEY}`
        ).then(
            (response) => {
                res.json(response.data.items)
            }
        ).catch(
            (err) => {
                res.json(err)
            }
        );
    });

    app.post("/api/books", (req, res) => {
        db.Book.create(req.body).then(
            (response) => {
                res.json({successful: response});
            }
        ).catch(
            (err) => {
                res.json(err);
            }
        );
    });

    app.delete("/api/books/:id", (req, res) => {
        db.Book.findByIdAndDelete(req.params.id).then(
            (response) => {
                res.json({successful: response});
            }
        ).catch(
            (err) => {
                rres.json(err);
            }
        );
    });

    
    // Define any API routes before this runs
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../client/build/index.html"));
    });
}