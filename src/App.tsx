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
