interface NotesLayoutProps {
  children: React.ReactNode;
  tags: React.ReactNode;
}

export default function NotesLayout({ children, tags }: NotesLayoutProps) {
  return (
    <section className="grow bg-black-900 pt-10 tablet-big:pt-15 pb-15 tablet:pb-25 tablet-big:bp-15 ps-5 pe-5 tablet:ps-21 tablet:pe-21 min-w-0 my-auto">
      <aside>{tags}</aside>
      <div>{children}</div>
    </section>
  );
}
