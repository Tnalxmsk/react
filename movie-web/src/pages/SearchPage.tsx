import { useLocation } from "react-router-dom";
import SearchBar from "../components/search/SearchBar.tsx";
import SearchMovies from "../components/search/SearchMovies.tsx";

const SearchPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query")

  return (
    <div>
      <SearchBar />
      <SearchMovies query={query!!} />
    </div>
  );
};

export default SearchPage;
