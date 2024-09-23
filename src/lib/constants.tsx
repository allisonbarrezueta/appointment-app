import { Calendar, ClipboardType, Home, Package, Users, UsersRound } from "lucide-react";

export const sidebarItems = [
    {
        title: "Dashboard",
        icon: <Home className="h-4 w-4" />,
        link: "dashboard",
    },
    {
        title: "Appointments",
        icon: <Calendar className="h-4 w-4" />,
        link: "appointments",
        badge: 6,
    },
    {
        title: "Products",
        icon: <Package className="h-4 w-4" />,
        link: "products",
    },
    {
        title: "Customers",
        icon: <Users className="h-4 w-4" />,
        link: "customers",
    },
    // {
    //     title: "Analytics",
    //     icon: <LineChart className="h-4 w-4" />,
    //     link: "analytics",
    // },
    {
        title: "Forms",
        icon: <ClipboardType className="h-4 w-4" />,
        link: "forms",
    },
    {
        title: "Specialists",
        icon: <UsersRound className="h-4 w-4" />,
        link: "users",
    },
];

export const genderOption = [
    { value: "female", label: "Female" },
    { value: "male", label: "Male" },
];

export const questionOption = [
    { value: "text", label: "Short answers" },
    { value: "textarea", label: "Long answers" },
    { value: "multiple_choice", label: "Multiple choice" },
    { value: "checkbox", label: "Checkbox" },
    { value: "dropdown", label: "Dropdown" },
    { value: "file_upload", label: "File upload" },
    { value: "date", label: "Date" },
    { value: "time", label: "Time" },
];
