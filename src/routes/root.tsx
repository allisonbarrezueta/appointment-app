import Nav from "@/components/ui/nav";
import Sidebar from "@/components/ui/sidebar";

import { Outlet } from "react-router-dom";

export default function Root() {
    const token = localStorage.getItem("token");
    if (!token) {
        window.location.href = "/login";
    }
    return (
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
            <Sidebar />
            <div className="flex flex-col">
                <Nav />
                <main className="relative flex w-full flex-1 flex-col gap-2 overflow-y-auto p-4 md:max-h-max lg:gap-4 lg:p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
