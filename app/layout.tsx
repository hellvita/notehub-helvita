import type { Metadata } from "next";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

const baseURL = process.env.NEXT_PUBLIC_API_URL;

export const metadata: Metadata = {
  title: "NoteHub",
  description: "A web-application to keep your notes that is simple to use.",
  openGraph: {
    title: "NoteHub",
    description:
      "Keep your notes organized with smart tagging. Create todos, work notes, and more. Search instantly, filter by category, sync everywhere you go.",
    url: baseURL,
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        width: 1200,
        height: 630,
        alt: "NoteHub",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} text-white-950 flex flex-col min-h-screen`}
      >
        <Header />

        <div className="grow">{children}</div>

        <Footer />
      </body>
    </html>
  );
}
