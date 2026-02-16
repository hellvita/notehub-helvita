import { RiResetLeftLine as ResetImgIcon } from "react-icons/ri";

interface IcButtonResetImgProps {
  handleResetImg: () => void;
}

export default function IcButtonResetImg({
  handleResetImg,
}: IcButtonResetImgProps) {
  return (
    <ResetImgIcon
      className="cursor-pointer mobile:text-s32 tablet:text-s24 max-tablet:hover:scale-90 opacity-60 hover:opacity-100"
      aria-label="set default avatar"
      title="reset avatar to default image"
      onClick={handleResetImg}
    />
  );
}
