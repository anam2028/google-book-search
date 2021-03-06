const express = require("express");
const mongoose = require("mongoose");
const routes = require('./client/routes');
const path = require("path");

const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(routes);

mongoose.Promise = Promise;
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/google-books-db",
  { useNewUrlParser: true }
);

// Send every request to the React app
// Define any API routes before this runs

app.listen(PORT, () => console.log(`🌎 ==> API server now on port ${PORT}!`));
