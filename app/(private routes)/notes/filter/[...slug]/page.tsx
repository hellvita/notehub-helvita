import type { Metadata } from "next";
import {
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from "@tanstack/react-query";
import { fetchNotes, getMe } from "@/lib/api/serverApi";
import NotesClient from "./Notes.client";
import { NoteTag } from "@/types/note";

interface NotesProps {
  params: Promise<{ slug: ("all" | NoteTag)[] }>;
}

export async function generateMetadata({
  params,
}: NotesProps): Promise<Metadata> {
  const { slug } = await params;
  const tag = slug[0];

  const titleStr = `${tag === "all" ? "All" : tag}`;
  const descriptionStr = `${
    tag === "all" ? "List of the all notes" : "List of notes with tag " + tag
  }`;

  const baseURL = process.env.NEXT_PUBLIC_API_URL;

  return {
    title: titleStr,
    description: descriptionStr,
    openGraph: {
      title: titleStr,
      description: descriptionStr,
      url: `${baseURL}/notes/filter/${tag}`,
      images: [
        {
          url: `${baseURL}/notehub-helvita-og-meta.jpg`,
          width: 1200,
          height: 630,
          alt: titleStr,
        },
      ],
    },
  };
}

export default async function Notes({ params }: NotesProps) {
  const queryClient = new QueryClient();

  const user = await getMe();

  const { slug } = await params;
  const tag = slug[0] === "all" ? undefined : slug[0];

  await queryClient.prefetchQuery({
    queryKey: ["notes", tag],
    queryFn: () => fetchNotes({ tag }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient currentTag={tag} user={user} />
    </HydrationBoundary>
  );
}
