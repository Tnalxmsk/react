import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout.tsx";
import HomePage from "../pages/HomePage.tsx";
import LoginPage from "../pages/LoginPage.tsx";
import SignupPage from "../pages/SignupPage.tsx";
import SearchPage from "../pages/SearchPage.tsx";
import MoviesPage from "../pages/MoviesPage.tsx";
import CategoryMoviesPage from "../pages/CategoryMoviesPage.tsx";
import MovieDetailPage from "../pages/MovieDetailPage.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/sign-in",
        element: <LoginPage />,
      },
      {
        path: "/sign-up",
        element: <SignupPage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "/movies/",
        element: <MoviesPage />,
      },
      {
        path: "/movies/:category",
        element: <CategoryMoviesPage />,
      },
      {
        path: "/movie-details/:movieId",
        element: <MovieDetailPage />,
      },
    ],
  },
]);
