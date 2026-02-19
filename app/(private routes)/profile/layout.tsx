import BgDot from "@/components/parts/BgDot/BgDot";

interface ProfileLayoutProps {
  children: React.ReactNode;
}

export default function ProfileLayout({ children }: ProfileLayoutProps) {
  return (
    <BgDot>
      <div className="min-w-0 my-0 mx-auto mobile:max-w-120 tablet:max-w-150 tablet-big:max-w-177 mobile:leading-none selection:text-purple-800 selection:bg-pink-400">
        {children}
      </div>
    </BgDot>
  );
}
