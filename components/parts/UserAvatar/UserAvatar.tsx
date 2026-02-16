import { getProfilePicture } from "@/lib/utils/strings";
import Image from "next/image";
import { DEFAULT_AVATAR } from "../../../lib/constants/defaultFiles";

interface UserAvatarProps {
  imageUrl?: string;
}

export default function UserAvatar({ imageUrl }: UserAvatarProps) {
  return (
    <Image
      src={imageUrl || DEFAULT_AVATAR || getProfilePicture()}
      alt="user profile picture"
      width={140}
      height={140}
      className="max-w-35 aspect-square pointer-events-none"
    />
  );
}
