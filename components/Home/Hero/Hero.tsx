import IconNotes from "../IconNotes/IconNotes";

export default function Hero() {
  return (
    <div className="relative">
      <h1 className="relative flex flex-col gap-1 mobile:gap-y-51 text-center font-bold mobile:text-s60 uppercase">
        <span>Welcome</span>
        <span className="mobile:absolute top-[40%] left-[35%] mobile:-rotate-13 italic font-extralight mobile:text-s100 lowercase mobile:text-purple-800 z-20">
          to
        </span>
        <span>Notehub</span>
      </h1>
      <div className="hidden mobile:block absolute top-[10%] left-[10%] z-10">
        <IconNotes screenSize="mobile" />
      </div>
    </div>
  );
}
