import Movies from "../components/movie/Movies.tsx";
import { useLocation } from "react-router-dom";

const CategoryMoviesPage = () => {
  const location = useLocation();
  const path = location.pathname.slice(7)
  let url = ""

  switch (path) {
    case "/now-playing":
      url = "now_playing"
      break
    case "/popular":
      url = "popular"
      break
    case "/top-rated":
      url = "top_rated"
      break
    case "/up-coming":
      url = "upcoming"
      break
    default:
      url = ""
      break
  }

  return (
    <Movies url={url}/>
  )
}

export default CategoryMoviesPage;
