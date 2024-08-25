//The code below is for a form inside of a modal for CRUD operations. It requires input from a user.

// src/components/ModalForm.js
import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function ModalForm({ show, handleClose, item, onSave }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    if (item) {
      setTitle(item.title);
      setBody(item.body);
    } else {
      setTitle('');
      setBody('');
    }
  }, [item]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      title,
      body,
      id: item ? item.id : new Date().getTime(), // Fake ID for new items
    };
    onSave(newItem);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{item ? 'Edit Item' : 'New Item'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formBody">
            <Form.Label>Body</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            {item ? 'Update' : 'Create'}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default ModalForm;
