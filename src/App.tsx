import "./App.css";

import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Layouts
import RootLayout from "./Layout/RootLayout";

// Pages
import Home from "./pages/Home";

const routes = createRoutesFromElements(
  <Route path="/" element={<RootLayout />}>
    <Route index element={<Home />} />
  </Route>
);

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
