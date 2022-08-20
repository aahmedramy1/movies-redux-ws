import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [
    {
      id: 1,
      title: "The Shawshank Redemption",
      description: "Two imprisoned",
    },
    {
      id: 2,
      title: "The Godfather",
      description: "The aging patriarch",
    },
    {
      id: 3,
      title: "The Godfather: Part II",
      description: "The early life and career of",
    },
    {
      id: 4,
      title: "The Dark Knight",
      description: "When the menace known as the Joker",
    },
  ],
  filterByTitle: "",
  filterByDescription: "",
};

export const filterTypes = {
  TITLE: "TITLE",
  DESCRIPTION: "DESCRIPTION",
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    editMovie(state, action) {
      const { id, title, description } = action.payload;
      const movie = state.movies.find((m) => m.id === id);
      movie.title = title;
      movie.description = description;
    },
    createMovie(state, action) {
      const { title, description } = action.payload;
      state.movies.push({
        id: state.movies.length + 1,
        title,
        description,
      });
    },
    editFilter(state, action) {
      const { filterBy, value } = action.payload;

      if (filterBy === filterTypes.TITLE) state.filterByTitle = value;
      else if (filterBy === filterTypes.DESCRIPTION)
        state.filterByDescription = value;
    },
  },
});

export const { editMovie, createMovie, editFilter } = moviesSlice.actions;
export default moviesSlice.reducer;
