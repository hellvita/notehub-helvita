import { InfinitySpin } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className="flex grow items-center justify-center bg-black-800">
      <InfinitySpin color="var(--color-blue-400)" ariaLabel="loader" />
    </div>
  );
}
