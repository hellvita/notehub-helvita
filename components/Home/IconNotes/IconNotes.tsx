import Image from "next/image";

type ScreenSize = "mobile" | "tablet" | "tablet-big" | "desktop";
interface IconNotesProps {
  screenSize: ScreenSize;
}

interface ImageSize {
  width: {
    mobile: number;
    tablet: number;
    "tablet-big": number;
    desktop: number;
  };
  height: {
    mobile: number;
    tablet: number;
    "tablet-big": number;
    desktop: number;
  };
}

const IMAGE_SIZE: ImageSize = {
  width: {
    mobile: 242,
    tablet: 0,
    "tablet-big": 0,
    desktop: 0,
  },
  height: {
    mobile: 221,
    tablet: 0,
    "tablet-big": 0,
    desktop: 0,
  },
};

export default function IconNotes({ screenSize }: IconNotesProps) {
  const imageSrc = `/notes-${screenSize}.svg`;

  return (
    <Image
      src={imageSrc}
      alt="a bunch of notes"
      width={IMAGE_SIZE.width[screenSize]}
      height={IMAGE_SIZE.height[screenSize]}
    />
  );
}
