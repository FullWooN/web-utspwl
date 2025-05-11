import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaRocket, FaInfoCircle, FaHandsHelping } from 'react-icons/fa';

function LandingPage() {
  return (
    <Container fluid className="landing-page" style={{ padding: '0' }}>
      {/* Hero Section */}
      <motion.div
        className="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        style={{ background: 'linear-gradient(to right, #3f5efb, #00c6ff)', padding: '100px 0', textAlign: 'center' }}
      >
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, type: 'spring', stiffness: 100 }}
          style={{ color: 'white', fontSize: '3rem' }}
        >
          Tempat curhat pelanggan PLN
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, type: 'spring', stiffness: 100 }}
          style={{ color: 'white', fontSize: '1.2rem', margin: '20px 0' }}
        >
          Menceritakan kesedihan, kegembiraan, dan pengalaman sebagai pelanggan PLN!
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <Button variant="light" size="lg" href="/web-blog" style={{ padding: '10px 30px' }}>
            Explore Posts
          </Button>
        </motion.div>
      </motion.div>

      {/* Features Section */}
      <motion.div
        className="features-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{ padding: '60px 0', background: '#f7f7f7' }}
      >
        <Container>
          <Row className="text-center">
            <Col sm={12} md={4}>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 100, delay: 1.7 }}
              >
                <FaRocket size={50} color="#3f5efb" />
                <h3>Fast & Reliable</h3>
                <p>Our platform ensures fast content delivery and a smooth user experience.</p>
              </motion.div>
            </Col>
            <Col sm={12} md={4}>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 100, delay: 1.9 }}
              >
                <FaInfoCircle size={50} color="#00c6ff" />
                <h3>Informative</h3>
                <p>Discover informative content that helps you stay ahead of the curve.</p>
              </motion.div>
            </Col>
            <Col sm={12} md={4}>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 100, delay: 2.1 }}
              >
                <FaHandsHelping size={50} color="#3f5efb" />
                <h3>Community Support</h3>
                <p>Engage with a supportive community and share your insights and experiences.</p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        className="cta-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        style={{ padding: '60px 0', textAlign: 'center', background: '#3f5efb', color: 'white' }}
      >
        <h2>Join Us Today!</h2>
        <p>Start creating, sharing, and discovering content. It's all free and easy.</p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <Button variant="light" size="lg" href="/Login">
            Get Started
          </Button>
        </motion.div>
      </motion.div>
    </Container>
  );
}

export default LandingPage;
