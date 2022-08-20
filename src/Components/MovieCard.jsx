import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import EditMovieModal from "./EditMovieModal";
import { useDispatch } from "react-redux";
import { editMovie } from "../features/movies/moviesSlice";

function MovieCard({ movie }) {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const handleSaveModal = (id, title, description) => {
    dispatch(editMovie({ id, title, description }));
    setShowModal(false);
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.description}</Card.Text>
        <Button variant="primary" onClick={handleShowModal}>
          Edit Movie
        </Button>
      </Card.Body>
      <EditMovieModal
        show={showModal}
        handleClose={handleCloseModal}
        handleSave={handleSaveModal}
        movie={movie}
      />
    </Card>
  );
}

export default MovieCard;
