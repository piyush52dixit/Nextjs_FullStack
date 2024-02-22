const postsRouter = require("./routes/Posts");
const express = require("express");

const app = express();

app.use(express.json());
const PORT = 5555;

const db = require("./models/index");

app.use("/posts", postsRouter);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is Running at Port ${PORT}`);
  });
});
