const express = require('express');
const router = express.Router();
const db = require('../db');


// get all posts
router.get('/', (req, res) => {
  db.query('SELECT * FROM posts', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// add post
router.post('/', (req, res) => {
  const { title, content, user_id } = req.body;
  db.query('INSERT INTO posts (title, content, user_id) VALUES (?, ?, ?)', [title, content, user_id], (err) => {
    if (err) return res.status(500).send(err);
    res.sendStatus(200);
  });
});

// update post
router.put('/:id', (req, res) => {
  const { title, content } = req.body;
  db.query('UPDATE posts SET title = ?, content = ? WHERE id = ?', [title, content, req.params.id], (err) => {
    if (err) return res.status(500).send(err);
    res.sendStatus(200);
  });
});

// delete post
router.delete('/:id', (req, res) => {
  db.query('DELETE FROM posts WHERE id = ?', [req.params.id], (err) => {
    if (err) return res.status(500).send(err);
    res.sendStatus(200);
  });
});

// GET /posts
router.get('/posts', (req, res) => {
  const query = `
    SELECT posts.id, posts.title, posts.content, posts.likes, users.username 
    FROM posts 
    JOIN users ON posts.user_id = users.id 
    ORDER BY posts.id DESC
  `;
  db.query(query, (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results); // akan mengandung username
  });
});


module.exports = router;
