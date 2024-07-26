import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateNote, getNote } from '../redux/actions/noteActions';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const EditNote = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const note = useSelector(state => state.notes.notes.find(note => note.id === id));
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState(null);
  const user = useSelector(state => state.auth.user);

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setContent(note.content);
    } else {
      dispatch(getNote(id))
        .then(fetchedNote => {
          setTitle(fetchedNote.title);
          setContent(fetchedNote.content);
        })
        .catch(err => setError('Fetch note error: ' + err.message));
    }
  }, [dispatch, id, note]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) {
      setError('You need to be logged in to edit notes.');
      return;
    }
    dispatch(updateNote(id, { title, content }))
      .then(() => navigate('/'))
      .catch(error => setError('Update note error: ' + error.message));
  };

  return (
    <Container className="mt-5">
      <h2>Edit Note</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter note title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formContent">
          <Form.Label>Content</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter note content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Update Note
        </Button>
      </Form>
    </Container>
  );
};

export default EditNote;
