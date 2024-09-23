import React from "react";
import { Input } from "./input";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    srcIcon: string;
}

const InputIcon = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, srcIcon, ...props }, ref) => {
    return (
        <label className="relative block">
            <span className="absolute inset-y-0 left-2 flex items-center">
                <img src={srcIcon} alt="" className="h-8 w-8" />
            </span>
            <Input className="!pl-12" type={type} ref={ref} {...props} />
        </label>
    );
});

InputIcon.displayName = "InputIcon";

export { InputIcon };
