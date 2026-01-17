"use client";

import { useWindowWidth } from "@/hooks/useWindowWidth";
import Image from "next/image";

type ScreenSize = "mobile" | "tablet" | "desktop";

interface ImageSize {
  width: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
  height: {
    mobile: number;
    tablet: number;
    desktop: number;
    css: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  };
}

const IMAGE_SIZE: ImageSize = {
  width: {
    mobile: 242,
    tablet: 381,
    desktop: 526,
  },
  height: {
    mobile: 221,
    tablet: 348,
    desktop: 480,
    css: {
      mobile: "h-55.25",
      tablet: "h-87",
      desktop: "h-120",
    },
  },
};

export default function IconNotes() {
  const width = useWindowWidth();

  let screenSize: ScreenSize = "mobile";
  const imageSrc = `/notes-${screenSize}.svg`;

  if (width >= 1133) {
    screenSize = "desktop";
  } else if (width >= 700) {
    screenSize = "tablet";
  } else {
    screenSize = "mobile";
  }

  return (
    <Image
      src={imageSrc}
      alt="a bunch of notes"
      width={IMAGE_SIZE.width[screenSize]}
      height={IMAGE_SIZE.height[screenSize]}
      loading="eager"
      className={`${IMAGE_SIZE.height.css[screenSize]} max-w-none`}
    />
  );
}
