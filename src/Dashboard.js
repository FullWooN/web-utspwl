import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import PostForm from './PostForm'; // Import PostForm
import PostList from './PostList'; // Import PostList
import { useSpring, animated } from 'react-spring'; // Import from react-spring

function Dashboard() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    if (!userId) {
      navigate('/');
      return;
    }

    // Fetch posts from the backend
    axios.get('http://localhost:5000/posts')
      .then(res => setPosts(res.data))
      .catch(err => console.error('Error fetching posts:', err));
  }, [userId, navigate]);

  const handleLogout = () => {
    localStorage.removeItem('userId');
    navigate('/');
  };

  // Animasi untuk elemen yang muncul
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <Container className="my-5">
      <Row>
        <Col md={12}>
          {/* Animasi untuk judul Dashboard */}
          <animated.h2 style={fadeIn} className="text-center mb-4">
            Dashboard
          </animated.h2>

          {/* Animasi untuk tombol Logout */}
          <Button variant="danger" className="mb-3" onClick={handleLogout}>
            Logout
          </Button>
        </Col>
      </Row>

      {/* Add Post Form */}
      <Row className="mb-4">
        <Col md={12}>
          <Card className="shadow-lg">
            <Card.Body>
              <h4 className="card-title">Create a New Post</h4>
              <PostForm setPosts={setPosts} /> {/* Pass setPosts to PostForm */}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* List of Posts */}
      <Row>
        <Col md={12}>
          {/* Animasi untuk Card yang berisi postingan */}
          <animated.div style={fadeIn}>
            <Card className="shadow-lg">
              <Card.Body>
                <h4 className="card-title">Recent Posts</h4>
                <PostList 
                  posts={posts} 
                  setPosts={setPosts} 
                  handleEdit={(id) => navigate(`/edit-post/${id}`)} // Navigasi ke halaman edit
                />
              </Card.Body>
            </Card>
          </animated.div>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
