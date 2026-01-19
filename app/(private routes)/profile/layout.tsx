interface ProfileLayoutProps {
  children: React.ReactNode;
}

export default function ProfileLayout({ children }: ProfileLayoutProps) {
  return (
    <div
      className="grow flex flex-col bg-black-900
     bg-[radial-gradient(#515151_1px,transparent_2px)] 
     bg-size-[20px_20px]"
    >
      <div className="grow bg-linear-to-b from-black-900/90 via-black-900/70 to-black-900/0 py-10 px-4 tablet:py-15 tablet:px-13">
        <div className="min-w-0 my-0 mx-auto mobile:max-w-82 tablet:max-w-150 tablet-big:max-w-177 mobile:leading-none selection:text-purple-800 selection:bg-pink-400">
          {children}
        </div>
      </div>
    </div>
  );
}
