import type { Metadata } from "next";
import ButtonLink from "@/components/parts/ButtonLink/ButtonLink";

const baseURL = process.env.NEXT_PUBLIC_API_URL;

export const metadata: Metadata = {
  title: "Page not found",
  description: "Unfortunately, the page at this address does not exist!",
  alternates: {
    canonical: `${baseURL}/404`,
  },
  openGraph: {
    title: "Page not found",
    description: "Unfortunately, the page at this address does not exist!",
    url: `${baseURL}/404`,
    images: [
      {
        url: `${baseURL}/notehub-helvita-og-meta.jpg`,
        width: 1200,
        height: 630,
        alt: "NoteHub",
      },
    ],
  },
};

export default function NotFound() {
  return (
    <div className="flex grow flex-col gap-7 items-center justify-center bg-black-800 p-10 mobile:leading-auto selection:text-purple-800 selection:bg-pink-400">
      <div className="">
        <h1 className="font-medium mobile:text-s40 mb-4 text-pink-400">
          404 - Page not found
        </h1>
        <p className="mobile:text-s24">
          Sorry, the page you are looking for does not exist.
        </p>
      </div>

      <ButtonLink
        text="Go to the main page"
        href="/"
        twStyles="px-5 py-2 text-center text-blue-400 mobile:text-s20 tablet:text-s24 font-normal border cursor-pointer"
        borderColorHover="var(--color-blue-400)"
        bgColorHover="var(--color-blue-400)"
      />
    </div>
  );
}
