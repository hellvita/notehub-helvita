import type { Metadata } from "next";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";
import AuthProvider from "@/components/AuthProvider/AuthProvider";
import { Toaster } from "react-hot-toast";
import Header from "@/components/Header/Header";
import ModalMobile from "@/components/ModalMobile/ModalMobile";
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
        url: `${baseURL}/notehub-helvita-og-meta.jpg`,
        width: 1200,
        height: 630,
        alt: "NoteHub",
      },
    ],
  },
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} antialiased text-white-950 text-s12 mobile:text-s16 leading-4 mobile:leading-8 flex flex-col min-h-screen relative`}
      >
        <TanStackProvider>
          <AuthProvider>
            <ModalMobile />
            <Header />
            <Toaster
              toastOptions={{
                className:
                  "text-center selection:text-purple-800 selection:bg-pink-400 text-black-900",
              }}
            />
            {children}
            {modal}

            <Footer />
          </AuthProvider>
        </TanStackProvider>
      </body>
    </html>
  );
}
