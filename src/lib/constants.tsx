import { Calendar, ClipboardType, Home, LineChart, Package, Users } from "lucide-react";

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
    {
        title: "Analytics",
        icon: <LineChart className="h-4 w-4" />,
        link: "analytics",
    },
    {
        title: "Forms",
        icon: <ClipboardType className="h-4 w-4" />,
        link: "forms",
    },
];
