const { createReadStream, createWriteStream } = require("fs");
const express = require("express");
const app = express();
const port = 5000;

app.use(express.static("public"));
app.get("/stream", (req, res) => {
  const readStream = createReadStream("zoom.mp4");
  readStream.on("data", (chunk) => {
    res.write(chunk);
  });
});

app.listen(port, () => {
  console.log("Sever running on port " + port);
});
