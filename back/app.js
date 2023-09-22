const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require('cors')
require("dotenv").config();

//import routes
const disciplinaRoutes = require("./routes/Disciplina");

//app
const app = express();

//db
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log("DB Connected"));

mongoose.connection.on("error", (err) => {
  console.log(`DB connection error: ${err.message}`);
});

//middleware
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())

//routes
app.use("/api", disciplinaRoutes);

const port = process.env.PORT || 8002;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
