const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require("passport");
//creating our express server at port 5000
const app = express();
const users = require("./routes/api/user");

//setting up middleware
app.use(cors());
app.use(bodyParser.urlencoded({
  extended: false
})
);

app.use(bodyParser.json());

//setting and connfiguring database
const dbKeys = require("./config/keys").mongoURI;

mongoose
  .connect(
    dbKeys, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true}
  )
  .then(() => console.log("mongoDB connected succesfully"))
  .catch(err => console.log("Error: " + err));

app.use(passport.initialize());
require("./config/passport")(passport);

//express router
app.use("/api/user", users);

const port = 5000;
app.listen(port, () => console.log('Server is on port ' + port));
