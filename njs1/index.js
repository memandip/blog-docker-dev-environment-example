const express = require("express");
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => res.send("Hello from NODEJS APP 1"));

app.listen(port, () => console.log(`NJS1 app listening on port ${port}!`));
