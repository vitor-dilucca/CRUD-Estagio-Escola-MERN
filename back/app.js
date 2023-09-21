const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
//import routes
const discRoutes = require('./routes/Disciplina')

//app
const app = express();

//db
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log("DB Connected"));

mongoose.connection.on('error',err=>{
  console.log(`DB connection error: ${err.message}`)
})

//routes
app.get("/", (req, res) => {
  res.send("hello from node");
});

const port = process.env.PORT || 8002;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
