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
    // console.log(req.body);
    let { operation_type, x, y } = req.body;

    x = parseInt(x);
    y = parseInt(y);

    let result;
    switch (operation_type) {
      case "subtraction":
        result = x - y;
        break;
      case "addition":
        result = x + y;
        break;
      case "subtraction":
        result = x - y;
        break;
      case "can you add":
        result = x + y;
        break;
      case "multiplication":
        result = x * y;
        break;
      default:
        "This operation does not exist";
        result = "unconclusive";
        break;
    }

    let response = {
      slackUsername: "NoobDev",
      operation_type: operation_type.value,
      result,
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
