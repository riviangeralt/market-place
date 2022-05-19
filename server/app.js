const app = require("express")();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
require("dotenv").config();
const authRoute = require("./routes/auth");

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(morgan("dev"));

// Routes
app.use("/api", authRoute);
app.get("/api/hello", (req, res) => {
  res.json({ greeting: "Hello API" });
});

//listen on port
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
