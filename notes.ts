type NoteTag = "work" | "home" | "school";

type Note = {
  id: number;
  title: string;
  body: string;
  tag: NoteTag;
  pinned?: boolean;
};

const notes: Note[] = [
  { id: 1, title: "Finish homework", body: "Complete the TypeScript exercise.", tag: "school", pinned: true },
  { id: 2, title: "Team meeting", body: "Prepare the project update.", tag: "work" },
  { id: 3, title: "Buy groceries", body: "Milk, bread, and fruit.", tag: "home", pinned: true },
  { id: 4, title: "Plan vacation", body: "Choose travel dates.", tag: "home" },
  { id: 5, title: "Call home", body: "Remember to call.", tag: "home" },
  { id: 6, title: "Read a book", body: "Finish one chapter.", tag: "school" },
];

function countPinned(notes: Note[]): number {
  return notes.filter((note) => note.pinned === true).length;
}

function findNote(id: number): Note | undefined {
  return notes.find((note) => note.id === id);
}

const note = findNote(2);
if (note) {
  console.log(`Found note: ${note.title}`);
} else {
  console.log("Note not found");
}

console.log(`Pinned notes: ${countPinned(notes)}`);
