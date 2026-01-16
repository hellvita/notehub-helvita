"use client";

interface ButtonProps {
  text: string;
  handler: () => void;
  paddingX?: string;
  paddingY?: string;
  textColor?: string;
  bgColorHover?: string;
  borderW?: string;
  borderColorHover?: string;
  fontSize?: string;
  fontW?: string;
}

export default function ButtonText({
  text,
  handler,
  paddingX = "px-5",
  paddingY = "px-3",
  textColor = "text-green-200",
  bgColorHover = "hover:bg-green-200",
  borderW = "border",
  borderColorHover = "hover:border-green-200",
  fontSize = "text-s16",
  fontW = "font-normal",
}: ButtonProps) {
  const style = `${paddingX} ${paddingY} ${textColor} ${fontW} ${borderW} ${fontSize} ${bgColorHover} ${borderColorHover} hover:text-black-900 transition-colors duration-300 cursor-pointer`;

  return (
    <button onClick={handler} className={style}>
      {text}
    </button>
  );
}
