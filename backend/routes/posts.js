const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all posts
router.get('/', (req, res) => {
  db.query('SELECT * FROM posts', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

// Create a post
router.post('/', (req, res) => {
  const { title, content, userId } = req.body;
  db.query(
    'INSERT INTO posts (title, content, user_id) VALUES (?, ?, ?)',
    [title, content, userId],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ success: true, id: result.insertId });
    }
  );
});

// Delete a post
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM posts WHERE id = ?', [id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ success: true });
  });
});

// Update a post
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  db.query(
    'UPDATE posts SET title = ?, content = ? WHERE id = ?',
    [title, content, id],
    (err) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ success: true });
    }
  );
});

// Tambah jumlah like
router.post('/:id/like', (req, res) => {
  const postId = req.params.id;
  db.query(
    'UPDATE posts SET likes = likes + 1 WHERE id = ?',
    [postId],
    (err) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ success: true });
    }
  );
});

// Get all posts with username
router.get('/', (req, res) => {
  const query = `
    SELECT posts.id, posts.title, posts.content, posts.likes, users.username
    FROM posts
    JOIN users ON posts.user_id = users.id
    ORDER BY posts.id DESC
  `;
  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});




module.exports = router;
