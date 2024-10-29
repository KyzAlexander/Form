const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/ping', (req, res) => {
  res.json({ status: 'success', message: 'Server is ready' });
});

app.post('/api/registration', (req, res) => {
  const success = Math.random() > 0.5;
  if (success) {
    res.json({ status: 'success', msg: 'Your request was successful' });
  } else {
    res.status(400).json({ status: 'error', fields: { name: 'Name is required' } });
  }
});

app.listen(9090, () => console.log('Server running on http://localhost:9090'));