import { ReactNode } from "react";
import MyText from "../MyText";

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  title: string;
  id?: string;
}

export default function SectionContainer({
  children,
  title,
  className,
  id,
}: SectionContainerProps) {
  return (
    <section id={id} className={`py-8 md:py-10 text-center ${className}`}>
      <MyText size="h2" className="font-medium py-10">
        {title}
      </MyText>

      {children}
    </section>
  );
}
