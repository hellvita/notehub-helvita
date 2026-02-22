import ButtonText from "@/components/parts/ButtonText/ButtonText";

interface CreateButtonMobileProps {
  handler: () => void;
}

export default function CreateButtonMobile({
  handler,
}: CreateButtonMobileProps) {
  return (
    <div className="sticky flex justify-end bottom-8 tablet:bottom-10 tablet-big:hidden pointer-events-none">
      <ButtonText
        text="+"
        handler={handler}
        twStyles="border rounded-[50%] mobile:text-s32 font-light text-blue-400/80 bg-black-900/90 px-4 py-2.25 pointer-events-auto"
        bgColorHover="var(--color-blue-400)"
        borderColorHover="var(--color-blue-400)"
      />
    </div>
  );
}
