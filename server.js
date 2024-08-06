const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

// Allow cross-origin requests (required for MetaMask)
app.use(cors());
app.use(express.json());

// Serve static files
app.use(express.static(path.join(__dirname)));

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
