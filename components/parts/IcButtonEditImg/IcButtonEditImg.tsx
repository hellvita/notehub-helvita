import { RiImageEditFill as EditImgIcon } from "react-icons/ri";

export default function IcButtonEditImg() {
  return (
    <EditImgIcon
      className="cursor-pointer mobile:text-s32 tablet:text-s28 max-tablet:hover:scale-90 opacity-60 hover:opacity-100"
      aria-label="change avatar"
      title="change avatar"
    />
  );
}
