import { create } from "zustand";
import { persist } from "zustand/middleware";
import { NewNote, TAG_TYPES } from "@/types/note";

interface NoteDraftStore {
  draft: NewNote;
  setDraft: (note: NewNote) => void;
  clearDraft: () => void;
}

const initialDraft: NewNote = {
  title: "",
  content: "",
  tag: TAG_TYPES[0],
};

export const useNoteDraftStore = create<NoteDraftStore>()(
  persist(
    (set) => ({
      draft: initialDraft,
      setDraft: (note) => set(() => ({ draft: note })),
      clearDraft: () => set(() => ({ draft: initialDraft })),
    }),
    {
      name: "note-draft",
      partialize: (state) => ({ draft: state.draft }),
    },
  ),
);

interface NoteCountStore {
  readonly LIMIT: number;
  count: number;
  setCount: (count: number) => void;
  increaseNoteAmount: () => void;
  decreaseNoteAmount: () => void;
}

export const useNoteCountStore = create<NoteCountStore>()(
  persist(
    (set) => ({
      LIMIT: 2,
      count: 0,
      setCount: (count) =>
        set(() => ({
          count,
        })),
      increaseNoteAmount: () =>
        set((state) => {
          if (state.count >= state.LIMIT) return state;

          return { count: state.count + 1 };
        }),
      decreaseNoteAmount: () =>
        set((state) => {
          if (state.count < 1) return state;

          return { count: state.count - 1 };
        }),
    }),
    {
      name: "note-count",
    },
  ),
);
