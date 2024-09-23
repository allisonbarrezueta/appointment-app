import { Button } from "@/components/ui/button";
import { SelectWrapper } from "@/components/ui/select-wrapper";
import { questionOption } from "@/lib/constants";
import { BetweenHorizontalEnd, PlusCircle, TypeOutline } from "lucide-react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const HandleForm = () => {
    const [form, setForm] = useState({
        id: uuidv4(),
        title: "",
        description: "",
        sections: [
            {
                id: uuidv4(),
                formId: uuidv4(),
                title: "Section 1",
                subtitle: "Subtitle 1",
                orderIndex: 1,
                question: [
                    {
                        id: uuidv4(),
                        questionText: null,
                        placeholder: null,
                        contentTooltip: null,
                        defaultValue: "",
                        type: "text",
                        disabled: false,
                        optional: true,
                        orderIndex: 1,
                    },
                ],
            },
        ],
    } as Form);

    const showAsSection = form.sections.length > 1;
    console.log({ showAsSection });

    const addQuestion = () => {
        // const newQuestion = {
        //     id: uuidv4(),
        //     questionText: null,
        //     placeholder: null,
        //     contentTooltip: null,
        //     defaultValue: "",
        //     type: "text",
        //     disabled: false,
        //     optional: true,
        //     orderIndex: form.sections[0].question.length + 1,
        // };
        // const newSection = {
        //     id: uuidv4(),
        //     formId: uuidv4(),
        //     title: `Section 1`,
        //     subtitle: `Subtitle 1`,
        //     orderIndex: 1,
        //     question: [newQuestion],
        // };
        setForm({
            ...form,
            sections: [],
        });
    };

    return (
        <>
            <div className="relative w-full pb-16 md:mx-auto md:w-5/6">
                <div className="grid gap-2">
                    <TitleQuestion />
                    <Question id={"12"} />
                    {form.sections.map((section, index) => {
                        return <Section key={index} section={section} />;
                    })}
                </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 mx-4 flex h-14 justify-center rounded-tl-xl rounded-tr-xl border px-4 md:inset-y-0 md:left-0 md:right-auto md:my-6 md:h-max md:flex-col md:items-center md:rounded-xl md:p-2 md:shadow">
                <Button variant={"ghost"} className="md:!p-1.5" onClick={addQuestion}>
                    <PlusCircle className="h-6 w-6" />
                </Button>
                <Button variant={"ghost"} className="md:!p-1.5">
                    <TypeOutline className="h-6 w-6" />
                </Button>
                <Button variant={"ghost"} className="md:!p-1.5">
                    <BetweenHorizontalEnd className="h-6 w-6" />
                </Button>
            </div>
        </>
    );
};

export default HandleForm;

interface SectionProps {
    section: Section;
}

export const Section = ({ section }: SectionProps) => {
    return (
        <div>
            {section?.question?.map((question) => {
                console.log({ question });
                return <div></div>;
            })}
        </div>
    );
};

export const TitleQuestion = () => {
    const [isFocused, setIsFocused] = useState(false);
    return (
        <div className="rounded-xl border shadow" onClick={() => setIsFocused(true)} onBlur={() => setIsFocused(false)}>
            <div className={`h-2 rounded-tl-xl rounded-tr-xl ${isFocused ? "bg-purple-400" : "bg-transparent"}`} />
            <div className="flex flex-col space-y-2 p-4 pb-6">
                <input className="border-b p-2 outline-none focus-visible:border-b-2 focus-visible:border-b-purple-500" placeholder="Form title" />
                <input className="border-b p-2 outline-none focus-visible:border-b-2 focus-visible:border-b-purple-500" placeholder="Form description" />
            </div>
        </div>
    );
};

interface QuestionProps {
    id: string;
    questionText?: null | string;
    placeholder?: null | string;
    tooltip?: null | string;
    defaultValue?: string;
    varValue?: string | Illustration[];
    type?: string;
    notEdit?: boolean;
    optional?: boolean;
}

export const Question = (props: QuestionProps) => {
    const { id } = props;
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div id={id} className="rounded-xl border shadow" onClick={() => setIsFocused(true)} onBlur={() => setIsFocused(false)}>
            <div className={`h-2 rounded-tl-xl rounded-tr-xl ${isFocused ? "bg-purple-400" : "bg-transparent"}`} />
            <div className="flex flex-col space-y-2 p-4 pb-6">
                <div className="flex w-full flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
                    <input className="flex-1 border-b p-2 outline-none focus-visible:border-b-2 focus-visible:border-b-purple-500" placeholder={"Question"} />
                    <SelectWrapper options={questionOption} className="w-56" />
                </div>
            </div>
        </div>
    );
};
