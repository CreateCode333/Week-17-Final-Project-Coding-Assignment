

// src/components/UserProfile.js
import React from 'react';
import { Card } from 'react-bootstrap';

function UserProfile({ user }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{user.email}</Card.Subtitle>
        <Card.Text>{user.address}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default UserProfile;
