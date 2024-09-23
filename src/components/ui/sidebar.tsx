import { sidebarItems } from "@/lib/constants";
import { Bell, Package2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Badge } from "./badge";
import { Button } from "./button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";

export default function Sidebar() {
    const [selectedSidebar, setSelectedSidebar] = useState("dashboard");
    const navigate = useNavigate();

    useEffect(() => {
        const path = window.location.pathname.replace("/", "");
        const [found] = path.split("/");
        setSelectedSidebar(found);
    }, []);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const target = e.currentTarget;
        const linkName = target.getAttribute("href")?.replace("/", "") || "";

        setSelectedSidebar(linkName);
        navigate(linkName);
    };

    return (
        <aside className="hidden border-r bg-muted/40 md:block">
            <div className="flex h-full max-h-screen flex-col gap-2">
                <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                    <a href="/" className="flex items-center gap-2 font-semibold">
                        <Package2 className="h-6 w-6" />
                        <span className="">Appointment App</span>
                    </a>
                    <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
                        <Bell className="h-4 w-4" />
                        <span className="sr-only">Toggle notifications</span>
                    </Button>
                </div>
                <div className="flex-1">
                    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                        {sidebarItems.map((item, index) => {
                            const active = item.link === selectedSidebar ? "active" : "";
                            return (
                                <a
                                    key={index}
                                    href={item.link}
                                    className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${active ? "bg-muted text-primary" : "text-muted-foreground"}`}
                                    onClick={handleClick}>
                                    {item.icon}
                                    {item.title}
                                    {item.badge && <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">{item.badge}</Badge>}
                                </a>
                            );
                        })}
                    </nav>
                </div>
                <div className="mt-auto p-4">
                    <Card x-chunk="dashboard-02-chunk-0">
                        <CardHeader className="p-2 pt-0 md:p-4">
                            <CardTitle>Upgrade to Pro</CardTitle>
                            <CardDescription>Unlock all features and get unlimited access to our support team.</CardDescription>
                        </CardHeader>
                        <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                            <Button size="sm" className="w-full">
                                Upgrade
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </aside>
    );
}
