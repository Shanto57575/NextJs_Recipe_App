import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Welcome to my recipe App</h1>
      <Link href={'/recipe-list'}>Explore Recipes</Link>
    </main>
  );
}
