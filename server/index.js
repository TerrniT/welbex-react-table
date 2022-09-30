const express = require("express")
const app = express();

const cors = require("cors");
app.use(cors());

app.get("/", (req,res) => {
  res.send("This is from express server")
})

app.use(express.static("public"));

// Start server on port 5000
app.listen(5000, () => {
  console.log("Server started on port 5000")
})
