const express = require('express');
const cors = require('cors');
const app = express();
const port = 3434;

app.use(cors())

app.get('/hello', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
