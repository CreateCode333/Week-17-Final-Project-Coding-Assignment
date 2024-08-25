//This code is a component that displays information in the footer of the webpage.

// src/components/Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-light text-center py-3">
      <Container>
        <Row>
          <Col>
            <p>&copy; {new Date().getFullYear()} My React App. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
