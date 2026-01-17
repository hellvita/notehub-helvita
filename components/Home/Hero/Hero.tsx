import IconNotes from "../IconNotes/IconNotes";

export default function Hero() {
  return (
    <div className="relative mb-5 mobile:mb-25 tablet:mb-19 tablet-big:mb-24 desktop:mb-0">
      <h1 className="relative flex flex-col gap-1 mobile:gap-y-45 tablet:gap-y-70 tablet-big:gap-y-93 text-center font-bold leading-none mobile:text-s60 tablet:text-s104 tablet-big:text-s160 uppercase">
        <span>Welcome</span>
        <span className="mobile:absolute mobile:top-[33%] mobile:left-[35%] tablet-big:left-[36%] mobile:-rotate-13 italic font-extralight mobile:text-s100 tablet:text-s160 tablet-big:text-s200 lowercase mobile:text-purple-800 selection:bg-white-950/90 z-20">
          to
        </span>
        <span>Notehub</span>
      </h1>
      <div className="hidden mobile:block absolute mobile:top-[14%] mobile:left-[10%] tablet:top-[15%] tablet:left-[12%] tablet-big:top-[16%] tablet-big:left-[16%] z-10 pointer-events-none">
        <IconNotes />
      </div>
    </div>
  );
}
