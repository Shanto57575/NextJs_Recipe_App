import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-black flex items-center justify-center text-center h-screen">
      <section className="font-serif">
        <h1 className="text-2xl md:text-4xl lg:text-6xl text-gray-300">Welcome to my recipe App</h1>
        <Link href={'/recipe-list'}><button className='mt-5 px-5 py-2.5 text-sm mb-4 font-serif rounded-md bg-white border text-black duration-500 hover:tracking-widest hover:font-semibold'>Explore Recipes</button></Link>
      </section>
    </main>
  );
}
