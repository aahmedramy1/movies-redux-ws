import CreateMovie from "./Components/CreateMovie";
import Filters from "./Components/Filters";
import MovieList from "./Components/MovieList";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        gap: "2.5rem",
      }}
    >
      <Filters />
      <CreateMovie />
      <MovieList />
    </div>
  );
}

export default App;
