import MyText from "../MyText";

interface TechItemProps {
  logoUrl: string;
  name: string;
  size?: "base" | "sm";
  className?: string;
}

export default function TechItem({
  logoUrl,
  name,
  className,
  size = "base",
}: TechItemProps) {
  let mobileWidth;
  let tabWidth;
  let largeWidth;

  switch (size) {
    case "base":
      mobileWidth = "w-[30px]";
      tabWidth = "md:w-[50px]";
      largeWidth = "xl:w-[80px]";
      break;

    case "sm":
      mobileWidth = "w-[20px]";
      tabWidth = "md:w-[30px]";
      largeWidth = "xl:w-[50px]";
      break;

    default:
      break;
  }

  return (
    <div
      className={`flex flex-col items-center justify-center text-center gap-2 ${className}`}>
      <div className={`${mobileWidth} ${tabWidth} ${largeWidth}`}>
        <img className="w-full" src={logoUrl} alt="" />
      </div>

      <MyText size="sm" className="font-normal">
        {name}
      </MyText>
    </div>
  );
}
