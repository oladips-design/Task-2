const express = require("express");
const app = express();
const port = 4000;

app.use(express.json());

app
  .route("/")
  .get((req, res) => {
    res.send("welcome!!! i do light arithmetics");
  })
  .post((req, res) => {
    let { operation_type, x, y } = req.body;

    let result;
    if (operation_type === "-") {
      result = x - y;
    }
    if (operation_type === "+") {
      result = x + y;
    }
    if (operation_type === "*") {
      result = x * y;
    } else if (operation_type === "/") {
      result = x / y;
    }

    let response = {
      slackUsername: "NoobDev",
      operation_type: operation_type,
      result: result,
    };

    res.send(response);
  });

app.listen(port, (err) => {
  if (err) {
    console.log("server not running");
    return;
  }
  console.log(`server running at http://localhost:${port}`);
});
