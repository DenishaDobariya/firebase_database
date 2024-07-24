import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editNote } from '../redux/actions/noteActions';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';

const EditNote = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { notes } = useSelector((state) => state.noteReducer);
  const note = notes.find(note => note.id === id);

  const [title, setTitle] = useState(note?.title || '');
  const [content, setContent] = useState(note?.content || '');

  useEffect(() => {
    if (!note) {
      navigate('/');
    }
  }, [note, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editNote(id, { title, content }));
    navigate('/');
  };

  return (
    <Container className="my-4">
      <h2>Edit Note</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formContent">
          <Form.Label>Content</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
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
