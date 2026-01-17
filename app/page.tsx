import Hero from "@/components/Home/Hero/Hero";
import AboutDesktop from "@/components/Home/AboutDesktop/AboutDesktop";
import About from "@/components/Home/About/About";

export default function Home() {
  return (
    <main className="bg-black-800 grow selection:text-purple-800 selection:bg-pink-400">
      <div className="py-6 mobile:py-25 px-4 desktop:px-10 flex flex-col desktop:flex-row justify-center items-center desktop:items-baseline">
        <AboutDesktop>
          <Hero />
        </AboutDesktop>
        <About />
      </div>
    </main>
  );
}
