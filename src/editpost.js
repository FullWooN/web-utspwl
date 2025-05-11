import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function EditPost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { id } = useParams();  // Ambil ID dari URL
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the post data based on the ID
    axios.get(`http://localhost:5000/posts/${id}`)
      .then(res => {
        setTitle(res.data.title);
        setContent(res.data.content);
      })
      .catch(err => console.error('Error fetching post:', err));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content) {
      alert('Title and content are required!');
      return;
    }

    try {
      // Update the post with the new title and content
      await axios.put(`http://localhost:5000/posts/${id}`, { title, content });
      navigate('/dashboard');  // Redirect back to dashboard after update
    } catch (err) {
      console.error('Error updating post:', err);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Edit Post</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formContent" className="mt-3">
          <Form.Label>Content</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Update Post
        </Button>
      </Form>
    </div>
  );
}

export default EditPost;
