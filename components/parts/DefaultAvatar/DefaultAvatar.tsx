import { getProfilePicture } from "@/lib/utils/strings";
import Image from "next/image";

interface DefaultAvatarProps {
  imageUrl?: string;
}

export default function DefaultAvatar({ imageUrl }: DefaultAvatarProps) {
  return (
    <Image
      src={imageUrl || getProfilePicture()}
      alt="default profile picture"
      width={140}
      height={140}
      className="max-w-35 aspect-square pointer-events-none"
    />
  );
}
