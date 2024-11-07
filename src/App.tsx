import NotFound from "./routes/404";
import About from "./routes/about";
import Artists from "./routes/artists";
import Compilation from "./routes/compilation";
import Home from "./routes/home";
import Release from "./routes/release";
import { GlobalStyle } from "./shared/global-style";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/compilation",
    element: <Compilation />,
  },
  {
    path: "/release",
    element: <Release />,
  },
  {
    path: "/artists",
    element: <Artists />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
