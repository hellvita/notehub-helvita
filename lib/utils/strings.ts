import { getRandomInt } from "./numbers";

export const normalizeEmail = (email: string): string => {
  const MAX_LENGTH = 14;
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

export const normalizeUsername = (username: string): string => {
  if (username.includes("@")) return normalizeEmail(username);

  const MAX_LENGTH = 12;

  if (username.length <= MAX_LENGTH) {
    return username;
  }

  const normValue = username.slice(0, MAX_LENGTH);

  return `${normValue}...`;
};

export const getProfilePicture = (): string => {
  const number = getRandomInt(1, 4);
  const path = `/default-${number}.svg`;

  return path;
};

export const sliceContent = (text: string): string => {
  if (typeof text !== "string") {
    return "";
  }

  const MAX_LENGTH = 127;

  if (text.length <= MAX_LENGTH) {
    return text;
  }

  return text.slice(0, MAX_LENGTH).trim() + "...";
};

export interface FormattedData {
  time: string;
  data: string;
}

export function formatDate(isoString: string): FormattedData {
  const date = new Date(isoString);

  if (isNaN(date.getTime())) {
    return { time: "", data: "" };
  }

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  const hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return {
    time: `${hours}:${minutes}`,
    data: `${day}.${month}.${year}`,
  };
}
