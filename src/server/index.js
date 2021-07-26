import express from "express";
import render from "./render";
const app = express();

app.use(express.static("public"));

app.get("*", (req, res) => {
  // render(req, res);
  render(req, res);
});

app.listen(3000, () => {
  console.log(`3000端口监听成功`);
});
