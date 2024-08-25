
// src/pages/HomePage.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function HomePage() {
  return (
    <Container className="my-5">
      <Row>
        <Col>
          <div className="jumbotron">
            <h1 className="display-4">Welcome to My React App</h1>
            <p className="lead">This is a simple hero unit, a jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr className="my-4" />
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <Button variant="primary">Learn More</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;


