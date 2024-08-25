////This code is a component that confirms actions taken by the user in the browser.

// src/components/ConfirmationDialog.js
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function ConfirmationDialog({ show, handleClose, onConfirm, message }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Action</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="danger" onClick={onConfirm}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ConfirmationDialog;
