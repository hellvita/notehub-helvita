import AuthGuard from "@/components/AuthGuard/AuthGuard";

interface NotesLayoutProps {
  children: React.ReactNode;
}

export default function NotesLayout({ children }: NotesLayoutProps) {
  return <AuthGuard>{children}</AuthGuard>;
}
