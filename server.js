const express = require("express");
const articleRouter = require("./routes/article");
const app = express();

app.set("view engine", "ejs");
app.use("/articles", articleRouter);

app.get("/", (req, res) => {
  const articles = [
    {
      title: "Article one",
      description: "Desciption Article One",
      createdAt: new Date(),
    },
    {
      title: "Article two",
      description: "Desciption Article two",
      createdAt: new Date(),
    },
  ];

  res.render("index", { articles: articles });
});

app.listen(5000);
