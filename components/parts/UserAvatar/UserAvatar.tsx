import { getProfilePicture } from "@/lib/utils/strings";
import Image from "next/image";

interface UserAvatarProps {
  imageUrl?: string;
}

const defaultAvatar = process.env.DEFAULT_AVATAR;

export default function UserAvatar({ imageUrl }: UserAvatarProps) {
  return (
    <Image
      src={imageUrl || defaultAvatar || getProfilePicture()}
      alt="user profile picture"
      width={140}
      height={140}
      className="max-w-35 aspect-square pointer-events-none"
    />
  );
}
