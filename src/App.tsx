// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HandleCustomer from "./components/features/customers/HandleCustomer";
import ViewCustomer from "./components/features/customers/ViewCustomer";
import Dashboard from "./components/features/dashboard/Dashboard";
import ErrorPage from "./components/features/error/error-page";
import HandleForm from "./components/features/forms.tsx/HandleForm";
import ViewForm from "./components/features/forms.tsx/ViewForm";
import HandleProduct from "./components/features/products/HandleProduct";
import ViewProducts from "./components/features/products/ViewProducts";
import Specialist from "./components/features/specialist/Specialist";
import "./global.css";
import Appointments from "./routes/Appointments";
import Customers from "./routes/Customers";
import Forms from "./routes/Forms";
import Login from "./routes/Login";
import Products from "./routes/Products";
import Root from "./routes/root";
import Settings from "./routes/Settings";
import SignUp from "./routes/SignUp";

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
                children: [
                    { index: true, element: <Products /> },
                    {
                        path: "products",
                        element: <Products />,
                    },
                    {
                        path: "products/:productId",
                        element: <ViewProducts />,
                    },
                    {
                        path: "/products:productId/edit",
                        element: <HandleProduct />,
                    },
                    {
                        path: "products/new",
                        element: <HandleProduct />,
                    },
                ],
            },

            {
                children: [
                    { index: true, element: <Customers /> },
                    {
                        path: "customers",
                        element: <Customers />,
                    },
                    {
                        path: "customers/:customerId",
                        element: <ViewCustomer />,
                    },
                    {
                        path: "customers/:customerId/edit",
                        element: <HandleCustomer />,
                    },
                    {
                        path: "customers/new",
                        element: <HandleCustomer />,
                    },
                ],
            },
            {
                children: [
                    { index: true, element: <Forms /> },
                    {
                        path: "forms",
                        element: <Forms />,
                    },
                    {
                        path: "forms/:formId",
                        element: <ViewForm />,
                    },
                    {
                        path: "forms/:formId/edit",
                        element: <HandleForm />,
                    },
                    {
                        path: "forms/new",
                        element: <HandleForm />,
                    },
                ],
            },
            {
                path: "users",
                element: <Specialist />,
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
