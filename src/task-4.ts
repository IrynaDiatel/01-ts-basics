const usernames: string[] = ["alice", "bob", "charlie"];

const ratings: number[] = [4.5, 3.8, 5];

interface Product {
  id: number;
  title: string;
}

const products: Product[] = [
  { id: 1, title: "Phone" },
  { id: 2, title: "Laptop" },
];


function printUserInfo(name: string, age: number, email?: string): void {
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
  if (email) {
    console.log(`Email: ${email}`);
  }
}


printUserInfo("Alice", 25, "alice@example.com");
printUserInfo("Bob", 30);

console.log(`Usernames: ${JSON.stringify(usernames)}`);
console.log(`Ratings: ${JSON.stringify(ratings)}`);
console.log(`Products: ${JSON.stringify(products)}`);

export {};