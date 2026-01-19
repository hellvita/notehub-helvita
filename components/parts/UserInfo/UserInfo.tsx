interface UserInfoProps {
  label: string;
  value: string;
  twStylesLabel?: string;
  twStylesValue?: string;
}

export default function UserInfo({ label, value }: UserInfoProps) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-yellow-500 mobile:text-s24">{label}</p>
      <p className="mobile:text-s28">{value}</p>
    </div>
  );
}
