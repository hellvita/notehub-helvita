import { getRandomInt } from "./numbers";

export const normalizeEmail = (email: string, maxLength: number): string => {
  const minLength = Math.max(maxLength, 12);

  if (email.length <= minLength) {
    return email;
  }

  const [localPart, domain] = email.split("@");
  const fullDomain = `@${domain}`;

  const availableForLocal = minLength - fullDomain.length - 1;

  const visibleStart = localPart.slice(0, Math.max(availableForLocal, 1));
  const lastChar = localPart.slice(-1);

  return `${visibleStart}...${lastChar}${fullDomain}`;
};

export const getProfilePicture = (): string => {
  const number = getRandomInt(1, 4);
  const path = `/default-${number}.svg`;

  return path;
};
