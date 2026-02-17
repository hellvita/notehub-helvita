export interface Note {
  readonly id: string;
  title: string;
  content: string;
  tag: NoteTag;
  createdAt: string;
  updatedAt: string;
}

export interface NewNote {
  title: string;
  content: string;
  tag: NoteTag;
}

export interface UpdatedNote {
  id: string;
  body: { title: string; content: string; tag: NoteTag };
}

export type NoteTag = (typeof TAG_TYPES)[number];

export const TAG_TYPES = [
  "Work",
  "Personal",
  "Meeting",
  "Shopping",
  "Ideas",
  "Travel",
  "Finance",
  "Health",
  "Important",
  "Todo",
] as const;
