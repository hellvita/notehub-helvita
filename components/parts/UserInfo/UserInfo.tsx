interface UserInfoProps {
  label: string;
  value: string;
  twStylesLabel?: string;
  twStylesValue?: string;
  twStylesContainer?: string;
}

export default function UserInfo({
  label,
  value,
  twStylesContainer = "flex flex-col gap-2",
  twStylesLabel = "text-yellow-500 mobile:text-s24",
  twStylesValue = "mobile:text-s28",
}: UserInfoProps) {
  return (
    <div className={twStylesContainer}>
      <p className={twStylesLabel}>{label}</p>
      <p className={twStylesValue}>{value}</p>
    </div>
  );
}
