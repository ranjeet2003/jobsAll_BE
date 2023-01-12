const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var cors = require("cors");

require("dotenv").config({ path: "./config.env" });
const govtJobsRoutes = require("./routes/govtJob-Route");
const internShipJobsRoutes = require("./routes/internshipJob-Routes");
const pvtJobsRoutes = require("./routes/pvtJob-Route");
const resultRoutes = require('./routes/results-Route');
const answerKeysRoutes = require('./routes/answerkey-Route');
const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));

app.use("/api/govt", govtJobsRoutes);
app.use("/api/pvt", pvtJobsRoutes);
app.use("/api/intern", internShipJobsRoutes);
app.use("/api/result", resultRoutes);
app.use("/api/answerkey", answerKeysRoutes)
// app.use("/api/users", usersRoutes);
// Define your port in your config.env file. Don't forget to add 'dotenv' npm package to use config.env
const PORT = process.env.PORT || 5555;
const PASSWORD = process.env.PASSWORD;
// console.log(PASSWORD);
try {
  mongoose.connect(
    `mongodb+srv://jobsAll:${PASSWORD}@cluster0.zbmybi7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
      console.log(err);
    }
  );
  app.listen(PORT);
  console.log("Server started on port 5555");
  // console.log("Connection Successful");
} catch (err) {
  console.log(err);
}
// mongoose
//   .connect(
//     `mongodb+srv://jobsAll:${PASSWORD}@cluster0.zbmybi7.mongodb.net/?retryWrites=true&w=majority`,
//     { useNewUrlParser: true, useUnifiedTopology: true },
//     (err) => {
//       console.log(err);
//     }
//   )
//   .then(() => {
//     app.listen(5555);
//     console.log("Connection Successfull");
//   })
//   .catch((err) => {
//     console.log("Catch error");
//     console.log(err);
//   });
