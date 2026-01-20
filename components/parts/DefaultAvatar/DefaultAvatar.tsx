import { getProfilePicture } from "@/lib/utils/strings";
import Image from "next/image";

export default function DefaultAvatar() {
  return (
    <Image
      src={getProfilePicture()}
      alt="default profile picture"
      width={140}
      height={140}
      className="max-w-35 aspect-square pointer-events-none"
    />
  );
}
