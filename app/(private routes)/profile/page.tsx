import Profile from "@/components/Profile/Profile";
import ButtonLink from "@/components/parts/ButtonLink/ButtonLink";
import UserInfo from "@/components/parts/UserInfo/UserInfo";

export default function ProfilePage() {
  return (
    <Profile title="Profile Page">
      <div className="flex flex-col gap-5 mb-13 tablet:mb-0">
        <UserInfo label="Username" value="my-user-name" />
        <UserInfo label="Email" value="my@mail.com" />
      </div>

      <ButtonLink
        text="Edit"
        href="/profile/edit"
        twStyles="p-3.5 min-w-0 my-0 mb-10 mx-auto block w-full tablet:max-w-22 text-yellow-500 text-center mobile:text-s20 tablet-big:text-s24 font-medium border cursor-pointer tablet:hidden"
        bgColorHover="var(--color-yellow-500)"
        borderColorHover="var(--color-yellow-500)"
      />
    </Profile>
  );
}
