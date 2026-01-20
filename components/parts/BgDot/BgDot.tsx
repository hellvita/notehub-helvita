interface BgDotProps {
  twStyles?: string;
  children: React.ReactNode;
}

export default function BgDot({
  children,
  twStyles = "py-10 px-4 tablet:py-15 tablet:px-13",
}: BgDotProps) {
  return (
    <div
      className="grow flex flex-col bg-black-900
     bg-[radial-gradient(#515151_1px,transparent_2px)] 
     bg-size-[20px_20px]"
    >
      <div
        className={`grow bg-linear-to-b from-black-900/90 via-black-900/70 to-black-900/0 ${twStyles}`}
      >
        {children}
      </div>
    </div>
  );
}
