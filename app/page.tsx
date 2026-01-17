import Hero from "@/components/Home/Hero/Hero";
import AboutDesktop from "@/components/Header/AboutDesktop/AboutDesktop";
import About from "@/components/Header/About/About";

export default function Home() {
  return (
    <main className="bg-black-800 grow selection:text-purple-800 selection:bg-pink-400">
      <div className="py-6 mobile:py-25 px-4 flex flex-col justify-center items-center">
        <AboutDesktop>
          <Hero />
        </AboutDesktop>
        <About />
      </div>
    </main>
  );
}
