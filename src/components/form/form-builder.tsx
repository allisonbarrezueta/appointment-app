import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const FormBuilder = () => {
    const [sections, setSections] = useState<Section[]>([] as Section[]);

    const addSection = () => {
        const newSection = {
            id: uuidv4(),
            formId: uuidv4(),
            title: "New Section",
            subtitle: "New Section Subtitle",
            orderIndex: sections.length,
            question: [] as Question[],
        };
        setSections((prevSections) => [...prevSections, newSection]);
    };

    return (
        <div>
            <button onClick={addSection}>Add Section</button>
            {sections.map((section) => (
                <SectionEditor key={section.id} section={section} setSections={setSections} />
            ))}
        </div>
    );
};

export const SectionEditor = ({ section, setSections }: { section: Section; setSections: React.Dispatch<React.SetStateAction<Section[]>> }) => {
    console.log(section, setSections);
    return <div></div>;
};
