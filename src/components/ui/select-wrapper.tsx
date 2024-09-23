import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function SelectWrapper({
    placeholder,
    options,
    name,
    className = "w-full",
    value,
    onValueChange,
    defaultValue,
    required,
}: {
    placeholder?: string;
    options: Option[];
    name?: string;
    className?: string;
    value?: string;
    onValueChange?: (value: string) => void;
    defaultValue?: string;
    required?: boolean;
}) {
    return (
        <Select value={value} onValueChange={onValueChange} defaultValue={defaultValue} name={name} required={required}>
            <SelectTrigger className={`${className}`}>
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                {options.map((option, index) => {
                    return (
                        <SelectItem key={index} value={option.value}>
                            {option.label}
                        </SelectItem>
                    );
                })}
            </SelectContent>
        </Select>
    );
}
