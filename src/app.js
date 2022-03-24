const express = require("express");
const bodyParser = require('body-parser');
const apiRouter = require("./routes/api");

const app = express();
app.set("PORT", process.env.PORT || 3095);

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use("/api", apiRouter);

app.listen(app.get("PORT"), () => {
  console.log(`listening on port ${app.get("PORT")}`);
});
