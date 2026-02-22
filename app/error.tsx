"use client";

import { useState } from "react";
import ButtonText from "@/components/parts/ButtonText/ButtonText";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  const [detailsIsOpen, setDetailsIsOpen] = useState<boolean>(false);

  const toggleDetails = () => setDetailsIsOpen((v) => !v);
  return (
    <div className="flex grow flex-col gap-7 items-center justify-center bg-black-800 font-medium p-10 mobile:leading-auto selection:text-purple-800 selection:bg-pink-400">
      <div className="max-w-157">
        <p className="mb-4 mobile:text-s32 text-center">
          <span className="text-pink-400">Oops!</span> There was an error,
          please try again...
        </p>
        {error && (
          <>
            <p
              className="font-light mobile:text-s28 cursor-pointer text-white-400 hover:text-white-950 transition-colors duration-300"
              onClick={toggleDetails}
            >
              {detailsIsOpen ? <span>{"v "}</span> : <span>{"> "}</span>}
              Details
            </p>
            {detailsIsOpen && (
              <p className="font-light text-pink-400 mobile:text-s20 italic">
                {error.message}
              </p>
            )}
          </>
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
