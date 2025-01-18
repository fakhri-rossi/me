import { ReactNode } from "react";

interface TextProps {
  children?: ReactNode;
  className?: string;
  size?: "title" | "h1" | "h2" | "h3" | "h4" | "p" | "sm";
}

export default function MyText({
  children,
  className,
  size = "sm",
}: TextProps) {
  const baseClass = "text-black";
  let sizeClass = "";
  switch (size) {
    case "title":
      sizeClass = "font-bold text-3xl md:text-4xl";
      break;

    case "h1":
      sizeClass = "font-light text-2xl md:text-3xl";
      break;

    case "h2":
      sizeClass = "font-light text-xl md:text-2xl";
      break;

    case "h3":
      sizeClass = "font-medium text-lg md:text-xl";
      break;

    case "h4":
      sizeClass = "font-medium text-lg md:text-xl";
      break;

    case "p":
      sizeClass = "";
      break;

    case "sm":
      sizeClass = "text-sm";
      break;

    default:
      break;
  }

  const finalClass = `${baseClass} ${sizeClass} ${className}`;

  return <p className={finalClass}>{children}</p>;
}
