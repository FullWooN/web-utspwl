const express = require('express');
const router = express.Router();
const db = require('../db');

// register
router.post('/register', (req, res) => {
  const { username, password } = req.body;
  db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, password], (err) => {
    if (err) return res.status(500).send(err);
    res.sendStatus(200);
  });
});

// login
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  db.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, results) => {
    if (err) return res.status(500).send(err);
    if (results.length > 0) {
      res.json({ success: true, userId: results[0].id });
    } else {
      res.json({ success: false });
    }
  });
});

module.exports = router;
