import Hero from "@/components/Home/Hero/Hero";

export default function Home() {
  return (
    <main className="bg-black-800 grow">
      <div className="py-6 mobile:py-25 px-4 flex flex-col justify-center items-center">
        <Hero />
      </div>
    </main>
  );
}
