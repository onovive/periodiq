import { ReactNode } from "react";

interface SectionProps {
  title: string;
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section className=" px-5 lg:px-0">
      <h3 className="text-2xl text-[#232523] font-semibold section-title relative mb-4">{title}</h3>
      {children}
    </section>
  );
};

export default Section;
