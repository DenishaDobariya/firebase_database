import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchNote, updateNote } from '../redux/actions/noteActions';

const EditNote = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const note = useSelector((state) =>
    state.notes.find((note) => note.id === id)
  );

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (id) {
      dispatch(fetchNote(id)).then((fetchedNote) => {
        if (fetchedNote) {
          setTitle(fetchedNote.title);
          setContent(fetchedNote.content);
        }
      });
    }
  }, [id, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateNote({ id, title, content }))
      .then(() => navigate('/home')) // Redirect to HomePage on successful update
      .catch((error) => console.error('Error updating note:', error));
  };

  return (
    <div className="container">
      <h1>Edit Note</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Title"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <textarea
            placeholder="Content"
            className="form-control"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Update Note</button>
      </form>
    </div>
  );
};

export default EditNote;
