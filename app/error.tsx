"use client";

import ButtonText from "@/components/parts/ButtonText/ButtonText";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="flex grow flex-col gap-7 items-center justify-center bg-black-800 font-medium p-10 mobile:leading-auto">
      <div>
        <p className="mb-4 mobile:text-s32 text-center">
          <span className="text-pink-400">Oops!</span> There was an error,
          please try again...
        </p>
        {error && (
          <p className="font-light mobile:text-s28">
            Details:
            <i className="text-pink-400 mobile:text-s20">{error.message}</i>
          </p>
        )}
      </div>

      <ButtonText
        text="Reset"
        handler={reset}
        twStyles="px-5 py-1 text-blue-400 mobile:text-s24 font-normal border cursor-pointer"
        borderColorHover="var(--color-blue-400)"
        bgColorHover="var(--color-blue-400)"
      />
    </div>
  );
}
