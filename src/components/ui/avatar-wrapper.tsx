import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AvatarWrapper({ src, alt, fallbackText }: { src: string; alt: string; fallbackText: string }) {
    return (
        <Avatar>
            <AvatarImage src={src} alt={alt} className="h-20 w-20" />
            <AvatarFallback>{fallbackText}</AvatarFallback>
        </Avatar>
    );
}
