import NavMenu from "../NavMenu/NavMenu";
import NavMenuAuth from "../NavMenuAuth/NavMenuAuth";

export default function AuthNavigation() {
  const isAuthorized = false;

  return isAuthorized ? <NavMenuAuth /> : <NavMenu />;
}
