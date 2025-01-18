import { ReactNode } from "react";

interface ButtonProps {
  children?: ReactNode;
  className?: string;
  variant?: "solid" | "outline";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button({
  children,
  className,
  onClick,
  variant = "solid",
}: ButtonProps) {
  let baseClass = "px-3 py-1 rounded-lg duration-150";

  baseClass =
    variant === "solid"
      ? baseClass + " bg-black text-white hover:bg-black/50"
      : baseClass +
        " bg-white text-black border border-solid border-black hover:bg-black hover:text-white";

  const finalClass = `${baseClass} ${className}`;
  return (
    <button onClick={onClick} className={finalClass}>
      {children}
    </button>
  );
}
