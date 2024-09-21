import { Sheet, SheetContent, SheetTrigger } from "./sheet";
import { Button } from "./button";
import { Menu } from "lucide-react";
import { Badge } from "./badge";
import { sidebarItems } from "@/lib/constants";

export default function MobileNav() {
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
                        return (
                            <a key={index} href={item.link} className="flex items-center gap-2 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground">
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
