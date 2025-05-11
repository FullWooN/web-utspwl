import React from 'react';
import axios from 'axios';  // Tambahkan import axios
import { Card, Button, Row, Col } from 'react-bootstrap';

function PostList({ posts, setPosts, handleEdit }) {
  const deletePost = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/posts/${id}`);
      setPosts(posts.filter(post => post.id !== id));
    } catch (error) {
      console.error('Error deleting post', error);
    }
  };

  return (
    <Row>
      {posts.map(post => (
        <Col sm={12} md={6} lg={4} key={post.id} className="mb-3">
          <Card className="shadow-lg">
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>{post.content}</Card.Text>
              <Button variant="primary" onClick={() => handleEdit(post.id)} className="me-2">
                Edit
              </Button>
              <Button variant="danger" onClick={() => deletePost(post.id)}>
                Delete
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default PostList;
