import { ReactNode } from "react";
import MyText from "../MyText";

export default function ContactItem({
  icon,
  label,
  value,
  className,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="flex gap-2 items-center">
        <MyText size="h4">{icon}</MyText>

        <MyText size="h4" className="font-medium">
          {label}
        </MyText>
      </div>

      <MyText
        size="p"
        className="text-start underline hover:text-black/50 cursor-pointer duration-100">
        {value}
      </MyText>
    </div>
  );
}
