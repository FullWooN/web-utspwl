import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Card, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function WebBlogDetail() {
  const { id } = useParams(); // Mendapatkan parameter id dari URL
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Ambil data postingan berdasarkan ID
    axios.get(`http://localhost:5000/posts/${id}`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        console.error('Error fetching post details:', error);
      });
  }, [id]);

  return (
    <Container className="mt-5">
      {post ? (
        <Card className="shadow-sm">
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>{post.content}</Card.Text>
            <Button variant="secondary" href="/web-blog">Back to Blog</Button>
          </Card.Body>
        </Card>
      ) : (
        <p>Loading...</p>
      )}
    </Container>
  );
}

export default WebBlogDetail;
