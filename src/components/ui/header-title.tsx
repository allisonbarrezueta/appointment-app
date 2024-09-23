import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "./button";

type Props = {
    title: string;
    containerClassname?: string;
    className?: string;
    goBack?: boolean;
};

const HeaderTitle = (props: Props) => {
    const { title, containerClassname, className, goBack } = props;
    const navigate = useNavigate();

    return (
        <div className={`flex items-center ${containerClassname}`}>
            <h2 className={`scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 ${className}`}>
                {goBack && (
                    <Button variant="outline" size="icon" className={`mr-2 h-7 w-7`} onClick={() => navigate(-1)}>
                        <ChevronLeft className="h-4 w-4" />
                        <span className="sr-only">Back</span>
                    </Button>
                )}
                {title}
            </h2>
        </div>
    );
};

export default HeaderTitle;
