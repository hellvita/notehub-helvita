import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export const useAuthGuard = (isPrivatePage: boolean): boolean => {
  const router = useRouter();
  const [ready, setReady] = useState<boolean>(false);

  useEffect(() => {
    const check = async () => {
      const res = await fetch("/api/auth/refresh", {
        method: "POST",
        credentials: "include",
      });

      if (res.ok) {
        setReady(true);
      } else if (isPrivatePage) {
        router.replace("/sign-in");
      }
    };

    check();
  }, [isPrivatePage, router]);

  return ready;
};
