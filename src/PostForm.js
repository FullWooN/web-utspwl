import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';

function PostForm({ setPosts, postId, title, content, setTitle, setContent }) {
  const [localTitle, setLocalTitle] = useState(title || '');
  const [localContent, setLocalContent] = useState(content || '');

  // Set local state when title or content changes
  useEffect(() => {
    if (title !== undefined) setLocalTitle(title);
    if (content !== undefined) setLocalContent(content);
  }, [title, content]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!localTitle || !localContent) {
      alert('Title and content are required!');
      return;
    }

    try {
      let response;

      if (postId) {
        // Update existing post
        response = await axios.put(`http://localhost:5000/posts/${postId}`, { title: localTitle, content: localContent });
        setPosts(prevPosts => prevPosts.map(post => post.id === postId ? { ...post, title: localTitle, content: localContent } : post));
      } else {
        // Create new post
        response = await axios.post('http://localhost:5000/posts', { title: localTitle, content: localContent });
        setPosts(prevPosts => [response.data, ...prevPosts]); // Add the new post at the top of the list
      }

      // Reset form fields after submission
      setLocalTitle('');
      setLocalContent('');
    } catch (err) {
      console.error('Error creating/updating post:', err);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter title"
          value={localTitle}
          onChange={(e) => setLocalTitle(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formContent" className="mt-3">
        <Form.Label>Content</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter content"
          value={localContent}
          onChange={(e) => setLocalContent(e.target.value)}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit" className="mt-3">
        {postId ? 'Update Post' : 'Create Post'}
      </Button>
    </Form>
  );
}

export default PostForm;
