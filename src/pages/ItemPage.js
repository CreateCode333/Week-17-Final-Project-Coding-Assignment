

import React, { useState, useEffect } from 'react';
import { Container, Button, Table } from 'react-bootstrap';
import axios from 'axios';
import ItemForm from '../components/ItemForm';

function ItemPage() {
  const [items, setItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setItems(response.data.slice(0, 10)); // Limit to 10 items
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      setItems(items.filter(item => item.id !== id));
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const handleSave = async (item) => {
    if (editingItem) {
      // Update
      try {
        await axios.put(`https://jsonplaceholder.typicode.com/posts/${item.id}`, item);
        setItems(items.map(i => (i.id === item.id ? item : i)));
        setEditingItem(null);
      } catch (error) {
        console.error('Error updating item:', error);
      }
    } else {
      // Create
      try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', item);
        setItems([...items, response.data]);
      } catch (error) {
        console.error('Error creating item:', error);
      }
    }
  };

  return (
    <Container>
      <h1>Items</h1>
      <ItemForm item={editingItem} onSave={handleSave} />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
              <td>
                <Button variant="warning" onClick={() => setEditingItem(item)}>Edit</Button>
                <Button variant="danger" onClick={() => handleDelete(item.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default ItemPage;
