type Role = "admin" | "member" | "guest";

type Person = {
  id: number;
  name: string;
  role: Role;
  phone?: string;
};

const people: Person[] = [
  { id: 1, name: "Ama", role: "admin", phone: "555-0101" },
  { id: 2, name: "Kwame", role: "member" },
  { id: 3, name: "Zara", role: "guest" },
];

function peopleWithRole(people: Person[], role: Role): Person[] {
  return people.filter((person) => person.role === role);
}

function findPerson(id: number): Person | undefined {
  return people.find((person) => person.id === id);
}

const person = findPerson(1);
if (person) {
  console.log(`Found person: ${person.name}`);
} else {
  console.log("Person not found");
}

console.log(peopleWithRole(people, "member"));
