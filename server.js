const express = require("express");
const app = express();
const PORT = 3000;
const cors = require("cors");

app.use(cors());
let text_by_js = ""; // Variable to store the text sent by the frontend



app.use(express.json());

// Endpoint to receive text from the frontend
app.post("/send-text", (req, res) => {
  const { text } = req.body;

  if (text) {
    text_by_js = text; // Store the received text in the variable
    console.log("Received text from frontend:", text_by_js);
    res.status(200).send("Text received successfully!");
  } else {
    res.status(400).send("No text provided.");
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
