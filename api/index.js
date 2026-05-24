const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

app.get('/api/status', (req, res) => {
    res.json({ status: "CineSub API is running smoothly" });
});

module.exports = app;