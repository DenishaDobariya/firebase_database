import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotesList = () => {
  const { notes } = useSelector((state) => state.noteReducer);

  // Ensure notes is an array
  const notesArray = Array.isArray(notes) ? notes : [];

  return (
    <Container className="my-4">
      <Row>
        {notesArray.length > 0 ? (
          notesArray.map(note => (
            <Col key={note.id} md={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>{note.title}</Card.Title>
                  <Card.Text>{note.content}</Card.Text>
                  <Link to={`/edit/${note.id}`}>
                    <Button variant="primary">Edit</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p>No notes available</p>
        )}
      </Row>
    </Container>
  );
};

export default NotesList;
