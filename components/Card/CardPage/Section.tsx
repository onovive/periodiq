import { ReactNode } from 'react';

interface SectionProps {
    title: string;
    children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
    return (
        <section className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-semibold section-title relative mb-4">
                {title}
                <span className="absolute left-0 bottom-0 h-1 w-12 bg-blue-500"></span>
            </h3>
            {children}
        </section>
    );
};

export default Section;