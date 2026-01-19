"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  const router = useRouter();

  useEffect(() => {
    router.refresh();
  }, [router]);

  return (
    <div
      className="grow flex flex-col bg-black-900
     bg-[radial-gradient(#515151_1px,transparent_2px)] 
     bg-size-[20px_20px]"
    >
      <div className="grow bg-linear-to-b from-black-900/90 via-black-900/70 to-black-900/0">
        {children}
      </div>
    </div>
  );
}
