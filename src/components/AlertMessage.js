//This code is a component that displays alerts.

// src/components/AlertMessage.js
import React from 'react';
import { Alert } from 'react-bootstrap';

function AlertMessage({ message, variant }) {
  if (!message) return null;

  return <Alert variant={variant}>{message}</Alert>;
}

export default AlertMessage;
