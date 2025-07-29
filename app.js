const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('App is running!'));
app.get('/hello', (req, res) => res.send('Hello from Node.js!'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

