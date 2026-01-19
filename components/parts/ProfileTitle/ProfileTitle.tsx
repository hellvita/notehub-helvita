interface ProfileTitleProps {
  title: string;
  twStyles?: string;
}

export default function ProfileTitle({
  title,
  twStyles = "mobile:text-s32 tablet:text-s40 desktop:text-s56 font-medium mb-10",
}: ProfileTitleProps) {
  return <h1 className={twStyles}>{title}</h1>;
}
