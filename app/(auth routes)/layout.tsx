"use client";

import { useEffect, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import BgDot from "@/components/parts/BgDot/BgDot";
import Loader from "@/components/Loader/Loader";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    startTransition(() => {
      router.refresh();
      setIsMounted(true);
    });
  }, [router]);

  const isLoading = isPending || !isMounted;

  return (
    <BgDot>
      <div className="min-w-0 my-0 mx-auto mobile:max-w-82 tablet:max-w-150 tablet-big:max-w-177 mobile:leading-none selection:text-purple-800 selection:bg-pink-400">
        {isLoading ? <Loader /> : children}
      </div>
    </BgDot>
  );
}
