import IconNotes from "@/components/Home/IconNotes/IconNotes";

export default function Home() {
  return (
    <main className="bg-black-800 grow">
      <div className="py-25 px-4 flex flex-col justify-center items-center">
        <h1 className="flex flex-col text-center">
          <span>Welcome</span> <span>to</span> <span>Notehub</span>
        </h1>
        <div className="hidden mobile:block">
          <IconNotes screenSize="mobile" />
        </div>
      </div>
    </main>
  );
}
