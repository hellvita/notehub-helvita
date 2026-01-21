import { getRandomInt } from "./numbers";

export const normalizeEmail = (email: string): string => {
  const MAX_LENGTH = 16;
  const minLength = Math.max(MAX_LENGTH, 12);

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

export const sliceContent = (text: string): string => {
  const MAX_LENGTH = 127;

  if (text.length <= MAX_LENGTH) {
    return text;
  }

  return text.slice(0, MAX_LENGTH).trim() + "...";
};
