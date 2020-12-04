import express from "express";

let configViewEngine = (app) => {
    app.use(express.static("./src/public")); // lay duong link dong
    app.set("view engine", "ejs");
    app.set("views", "./src/views"); // tim file view engine
};

module.exports = configViewEngine;