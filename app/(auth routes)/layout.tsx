"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import BgDot from "@/components/parts/BgDot/BgDot";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  const router = useRouter();

  useEffect(() => {
    router.refresh();
  }, [router]);

  return (
    <BgDot>
      <div className="min-w-0 my-0 mx-auto mobile:max-w-82 tablet:max-w-150 tablet-big:max-w-177 mobile:leading-none selection:text-purple-800 selection:bg-pink-400">
        {children}
      </div>
    </BgDot>
  );
}
