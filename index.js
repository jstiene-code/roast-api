const express = require('express');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 3000;

app.get('/roast', (req, res) => {
  fs.readFile('roasts.txt', 'utf8', (err, data) => {
    if (err) return res.status(500).send('Error');
    const roasts = data.split('\n').map(l => l.trim()).filter(l => l);
    const random = roasts[Math.floor(Math.random() * roasts.length)];
    res.send(random);
  });
});

app.listen(port, () => console.log('Roast API running'));
