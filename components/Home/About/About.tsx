export default function About() {
  return (
    <div className="desktop:hidden text-center tablet:max-w-120 tablet-big:max-w-180">
      <p className="mb-4 mobile:mb-12 tablet:mb-11 tablet-big:mb-18 mobile:text-s20 tablet-big:text-s24 tablet:text-left tablet-big:text-right">
        NoteHub is a simple and efficient application designed for managing
        personal notes. It helps keep your thoughts organized and accessible in
        one place, whether you are at home or on the go.
      </p>
      <p className="mobile:text-s20 tablet-big:text-s24 tablet:text-right tablet-big:text-left">
        The app provides a clean interface for writing, editing, and browsing
        notes. With support for keyword search and structured organization,
        NoteHub offers a streamlined experience for anyone who values clarity
        and productivity.
      </p>
    </div>
  );
}
