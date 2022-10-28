const express = require("express");
const { json, urlencoded } = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const { EmployeeRoutes } = require("./routes");

const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cors());

// disable powered by cookies
app.disable("x-powered-by");

app.use("/api", EmployeeRoutes);

const PORT = process.env.PORT || 8000;
const mongoDB = "mongodb://127.0.0.1/employee_database";
// const mongoDB = process.env.DB_URL || "mongodb://127.0.0.1/my_database";


mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose
  .connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err.message));


app.use((req, res, next) => {
  res.status(404).send("404 Not Found")
  next();
})
