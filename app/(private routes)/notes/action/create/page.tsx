import type { Metadata } from "next";
import CreateNoteClient from "./CreateNote.client";

const baseURL = process.env.NEXT_PUBLIC_API_URL;

export const metadata: Metadata = {
  title: "Add new note",
  description: "You can easily create your new note here.",
  openGraph: {
    title: "Add new note",
    description: "You can easily create your new note here.",
    url: `${baseURL}/notes/action/create`,
    images: [
      {
        url: `${baseURL}/notehub-helvita-og-meta.jpg`,
        width: 1200,
        height: 630,
        alt: "Add new note",
      },
    ],
  },
};

export default function CreateNote() {
  return <CreateNoteClient />;
}
