import type { Metadata } from "next";
import { getMe } from "@/lib/api/serverApi";
import DefaultAvatar from "@/components/parts/DefaultAvatar/DefaultAvatar";
import ButtonLink from "@/components/parts/ButtonLink/ButtonLink";
import UserInfo from "@/components/parts/UserInfo/UserInfo";
import { normalizeEmail, normalizeUsername } from "@/lib/utils/strings";
import ProfilePageClient from "./ProfilePage.client";

export async function generateMetadata(): Promise<Metadata> {
  const user = await getMe();

  const titleStr = user.username;
  const descriptionStr = `${user.username}'s profile page. View your email, avatar, and update your username. Manage your account identity on NoteHub.`;
  const baseURL = process.env.NEXT_PUBLIC_API_URL;

  return {
    title: titleStr,
    description: descriptionStr.slice(0, 60),
    openGraph: {
      title: titleStr,
      description: descriptionStr,
      url: `${baseURL}/profile`,
      images: [
        {
          url: `${baseURL}/notehub-helvita-og-meta.jpg`,
          width: 1200,
          height: 630,
          alt: `${user.username}'s profile page`,
        },
      ],
    },
  };
}

export default async function ProfilePage() {
  const user = await getMe();

  const normalizedEmail = normalizeEmail(user.email);

  return (
    <ProfilePageClient>
      <div className="py-12 px-5 tablet:px-10 bg-black-800">
        <div className="mb-10 flex justify-between items-center">
          <h1 className="mobile:text-s32 tablet:text-s40 desktop:text-s56 font-medium">
            Profile Page
          </h1>
          <ButtonLink
            text="Edit"
            href="/profile/edit"
            twStyles="py-2 px-3 max-w-22 max-h-11.5 text-yellow-500 text-center text-s28 font-medium border cursor-pointer max-tablet:hidden"
            bgColorHover="var(--color-yellow-500)"
            borderColorHover="var(--color-yellow-500)"
          />
        </div>

        <div className="flex flex-col gap-10 items-center tablet-big:flex-row">
          <DefaultAvatar imageUrl={user.avatar} />

          <div className="w-full flex flex-col gap-y-5 tablet:max-tablet-big:flex-row tablet:max-tablet-big:justify-between mb-13 tablet:mb-0">
            <UserInfo
              label="Username"
              value={normalizeUsername(user.username)}
            />
            <UserInfo
              label="Email"
              value={normalizedEmail}
              twStylesLabel="text-yellow-500 mobile:text-s24 tablet:max-tablet-big:text-right"
              twStylesValue="mobile:text-s28 tablet:max-tablet-big:text-right"
            />
          </div>
        </div>

        <ButtonLink
          text="Edit"
          href="/profile/edit"
          twStyles="p-3.5 min-w-0 my-0 mx-auto block w-full text-yellow-500 text-center mobile:text-s20 font-medium border cursor-pointer tablet:hidden"
          bgColorHover="var(--color-yellow-500)"
          borderColorHover="var(--color-yellow-500)"
        />
      </div>
    </ProfilePageClient>
  );
}
