// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./global.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import Login from "./routes/Login";
import Dashboard from "./components/features/dashboard.tsx/dashboard";
import SignUp from "./routes/SignUp";
import ErrorPage from "./components/features/error/error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "products",
        element: <></>,
      },
      {
        path: "customers",
        element: <></>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
