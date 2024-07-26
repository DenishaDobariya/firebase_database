import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNotes } from '../redux/actions/noteActions';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrashAlt, FaPlus } from 'react-icons/fa'; 
import { deleteNote } from '../redux/actions/noteActions';

const Home = () => {
  const dispatch = useDispatch();
  const notes = useSelector(state => state.notes.notes);
  const user = useSelector(state => state.auth.user);

  useEffect(() => {
    dispatch(fetchNotes());
  }, [dispatch]);

  return (
    <Container className="mt-5">
      <h2>Your Notes</h2>
      {user && (
        <Link to="/add">
          <Button variant="primary" className="mb-3 d-flex align-items-center">
            <FaPlus className="mr-2" /> Add New Note
          </Button>
        </Link>
      )}
      <Row>
        {notes.map(note => (
          <Col key={note.id} md={4} className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title>{note.title}</Card.Title>
                <Card.Text>{note.content}</Card.Text>
                {user && (
                  <div>
                    <Link to={`/edit/${note.id}`}>
                      <Button variant="warning" className="mr-2 d-flex align-items-center">
                        <FaEdit className="mr-2" /> Edit
                      </Button>
                    </Link>
                    <Button 
                      variant="danger" 
                      className="d-flex align-items-center"
                      onClick={() => dispatch(deleteNote(note.id))}
                    >
                      <FaTrashAlt className="mr-2" /> Delete
                    </Button>
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
