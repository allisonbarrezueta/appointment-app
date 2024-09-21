// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./global.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import Login from "./routes/Login";
import Dashboard from "./components/features/dashboard.tsx/dashboard";
import SignUp from "./routes/SignUp";
import ErrorPage from "./components/features/error/error-page";
import Forms from "./routes/Forms";
import Customers from "./routes/Customers";
import Products from "./routes/Products";
import Settings from "./routes/Settings";
import Appointments from "./routes/Appointments";
import ViewProducts from "./components/features/products/ViewProducts";
import ViewCustomer from "./components/features/customers/ViewCustomer";
import HandleCustomer from "./components/features/customers/HandleCustomer";
import HandleProduct from "./components/features/products/HandleProduct";

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
                path: "appointments",
                element: <Appointments />,
            },
            {
                path: "products",
                element: <Products />,
                children: [
                    {
                        path: ":productId",
                        element: <ViewProducts />,
                    },
                    {
                        path: "new",
                        element: <HandleProduct />,
                    },
                ],
            },
            {
                path: "customers",
                element: <Customers />,
                children: [
                    {
                        path: ":customerId",
                        element: <ViewCustomer />,
                    },
                    {
                        path: "new",
                        element: <HandleCustomer />,
                    },
                ],
            },
            {
                path: "forms",
                element: <Forms />,
            },
            {
                path: "settings",
                element: <Settings />,
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
