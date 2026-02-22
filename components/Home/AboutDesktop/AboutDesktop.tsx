interface AboutDesktopProps {
  children: React.ReactNode;
}

export default function AboutDesktop({ children }: AboutDesktopProps) {
  return (
    <>
      <div className="flex flex-col gap-24">
        <div className="w-full h-1"></div>
        <p className="hidden desktop:block max-w-87 text-s24">
          NoteHub is a simple and efficient application designed for managing
          personal notes. It helps keep your thoughts organized and accessible
          in one place, whether you are at home or on the go.
        </p>
      </div>

      {children}

      <div className="flex flex-col gap-24">
        <div className="w-full h-1"></div>
        <p className="hidden desktop:block max-w-87 text-s24 text-right">
          The app provides a clean interface for writing, editing and browsing
          notes. With support for keyword search and structured organization,
          NoteHub offers a streamlined experience for anyone who values clarity
          and productivity.
        </p>
      </div>
    </>
  );
}
