//* 3rd Party
require("dotenv").config() // ? Load .env file
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors") // ? Cross Origin Resource Sharing

//* Imports
const authRoute = require("./routes/authRoute")

//* Express
const app = express() // ? Create Express App

//* CONSTANTS
const PORT = process.env.PORT || 3001
const URI = process.env.MONGODB_URI

//* Middleware
app.use(cors()) // ? Use Cross Origin Resource Sharing
app.use(express.json()) // ? Use JSON

//* Routes
app.use("/api/auth", authRoute) // ? Use the routes in the authRoute file

//* Start Up Server
const startUp = async () => {
  try {
    await mongoose.connect(URI) // ? Connect to MongoDB with mongoose. Grab the URI from the .env file and pass it in
    console.log("\nMongoDB connected")
    app.listen(PORT, () => console.log(`Server started on port ${PORT}\n`)) // ? Start the server on the port specified in the .env file
  } catch (e) {
    console.log(e)
  }
}

//* Start er up
startUp()
