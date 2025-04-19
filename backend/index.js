const express = require('express');
const multer = require('multer');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const { parseChat } = require('./chatProcessor');

const app = express();
const PORT = 10000;
const upload = multer({ dest: 'uploads/' });

app.use(cors());
app.use(express.json());



app.post('/upload', upload.single('chat'), async (req, res) => {
  const chatFile = fs.readFileSync(req.file.path, 'utf8');
  const result = parseChat(chatFile);
  fs.unlinkSync(req.file.path);
  res.json(result);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
