const express = require("express")
const connectDB = require("./config/db")
const routes = require("./routes/api/books")

const app = express()

connectDB().then( () => {
    console.log("connected to momgodb")
})

require("dotenv").config({ path:"./cofig.env" })
const port = process.removeListener.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));

app.use("/", routes)
