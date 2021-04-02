import express from "express";

const app = express();

const PORT = process.env.PORT || 3001;

app.listen(PORT, (req, res) => {
  console.log(`Server is up on port ${PORT}`);
});
