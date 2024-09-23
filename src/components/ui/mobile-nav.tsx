import { sidebarItems } from "@/lib/constants";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Badge } from "./badge";
import { Button } from "./button";
import { Sheet, SheetContent, SheetTrigger } from "./sheet";

export default function MobileNav() {
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
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="shrink-0 md:hidden">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle navigation menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
                <nav className="grid gap-2 text-lg font-medium">
                    {sidebarItems.map((item, index) => {
                        const active = item.link === selectedSidebar ? "active" : "";
                        return (
                            <a
                                key={index}
                                href={item.link}
                                className={`flex items-center gap-2 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground ${active ? "bg-muted text-primary" : "text-muted-foreground"}`}
                                onClick={handleClick}>
                                {item.icon}
                                {item.title}
                                {item.badge && <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">{item.badge}</Badge>}
                            </a>
                        );
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    );
}
