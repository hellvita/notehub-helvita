"use client";

import { useRouter } from "next/navigation";
import { useAuthStore } from "@/lib/store/authStore";
import { logout } from "@/lib/api/clientApi";
import NavMenu from "../NavMenu/NavMenu";
import NavMenuAuth from "../NavMenuAuth/NavMenuAuth";

export default function AuthNavigation() {
  const router = useRouter();
  const { isAuthenticated, user } = useAuthStore();
  const clearIsAuthenticated = useAuthStore(
    (state) => state.clearIsAuthenticated,
  );

  const handleLogout = async () => {
    await logout();
    clearIsAuthenticated();
    router.push("/sign-in");
  };

  return isAuthenticated ? (
    <NavMenuAuth user={user} handleLogout={handleLogout} />
  ) : (
    <NavMenu />
  );
}
