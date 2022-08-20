import React from "react";
import Form from "react-bootstrap/Form";
import { useSelector, useDispatch } from "react-redux";
import { filterTypes, editFilter } from "../features/movies/moviesSlice";

const Filters = () => {
  const dispatch = useDispatch();
  const { filterByTitle, filterByDescription } = useSelector(
    (state) => state.movies
  );
  return (
    <div>
      <Form
        style={{
          display: "flex",
          gap: "1.5rem",
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Filter by title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Filter by title"
            value={filterByTitle}
            onChange={(e) =>
              dispatch(
                editFilter({
                  filterBy: filterTypes.TITLE,
                  value: e.target.value,
                })
              )
            }
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Filter by description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Filter by description"
            value={filterByDescription}
            onChange={(e) =>
              dispatch(
                editFilter({
                  filterBy: filterTypes.DESCRIPTION,
                  value: e.target.value,
                })
              )
            }
          />
        </Form.Group>
      </Form>
    </div>
  );
};

export default Filters;
