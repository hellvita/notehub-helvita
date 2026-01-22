import ButtonLink from "@/components/parts/ButtonLink/ButtonLink";

export default function CreateButtonMobile() {
  return (
    <div className="sticky flex justify-end bottom-8 tablet:bottom-10 tablet-big:hidden pointer-events-none">
      <ButtonLink
        text="+"
        twStyles="border rounded-[50%] mobile:text-s32 font-light text-blue-400/80 bg-black-900/90 px-4 py-2.25 pointer-events-auto"
        bgColorHover="var(--color-blue-400)"
        borderColorHover="var(--color-blue-400)"
      />
    </div>
  );
}
