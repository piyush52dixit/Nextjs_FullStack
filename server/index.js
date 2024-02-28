const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const PORT = 5555;

const db = require("./models/index");

const postsRouter = require("./routes/Posts");
app.use("/posts", postsRouter);

const postsComments = require("./routes/Comments");
app.use("/comments", postsComments);

const usersRouter = require("./routes/Users");
app.use("/auth", usersRouter);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is Running at Port ${PORT}`);
  });
});
