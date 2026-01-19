import ProfileTitle from "../parts/ProfileTitle/ProfileTitle";
import { getProfilePicture } from "@/lib/utils/strings";
import Image from "next/image";

interface ProfileProps {
  title: string;
  children: React.ReactNode;
}

export default function Profile({ title, children }: ProfileProps) {
  return (
    <div className="py-12 px-5 tablet-big:px-10 bg-black-800">
      <ProfileTitle title={title} />

      <Image
        src={getProfilePicture()}
        alt="default profile picture"
        width={140}
        height={140}
        className="mb-10 mx-auto tablet-big:mx-0 tablet-big:mb-0 tablet-big:mr-10 max-w-35 aspect-square"
      />

      {children}
    </div>
  );
}
