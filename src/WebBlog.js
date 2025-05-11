import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function WebBlog() {
  const [posts, setPosts] = useState([]);
  const [likedPosts, setLikedPosts] = useState(() =>
    JSON.parse(localStorage.getItem('likedPosts')) || []
  );

  useEffect(() => {
    axios.get('http://localhost:5000/posts')
      .then((res) => setPosts(res.data))
      .catch((err) => console.error('Error fetching posts:', err));
  }, []);

  const handleLike = (id) => {
    if (likedPosts.includes(id)) {
      alert('You already liked this post!');
      return;
    }

    axios.post(`http://localhost:5000/posts/${id}/like`)
      .then(() => {
        const updatedPosts = posts.map((post) =>
          post.id === id ? { ...post, likes: post.likes + 1 } : post
        );
        setPosts(updatedPosts);

        const updatedLiked = [...likedPosts, id];
        setLikedPosts(updatedLiked);
        localStorage.setItem('likedPosts', JSON.stringify(updatedLiked));
      })
      .catch((err) => console.error('Error liking post:', err));
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center text-primary mb-4">📘 Tumpahkah semua cerita klean</h2>
      <Row>
        {posts.length === 0 ? (
          <Col className="text-center">
            <p>No posts available.</p>
          </Col>
        ) : (
          posts.map((post) => (
            <Col md={4} key={post.id} className="mb-4">
              <Card className="h-100 shadow-sm border-0">
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text>{post.content}</Card.Text>
                  <Card.Text className="text-muted" style={{ fontSize: '0.9rem' }}>
                    Posted by <strong>{post.username}</strong>
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between align-items-center">
                  <Button
                    variant={likedPosts.includes(post.id) ? 'secondary' : 'outline-primary'}
                    size="sm"
                    disabled={likedPosts.includes(post.id)}
                    onClick={() => handleLike(post.id)}
                  >
                    👍 Like ({post.likes})
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
}

export default WebBlog;
