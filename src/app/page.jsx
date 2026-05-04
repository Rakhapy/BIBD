// "use client"
import Link from "next/link";
import Image from "next/image";


export default function Home() {
  return (
    <div className="flex w-full justify-center gap-1 items-center flex-col min-h-screen sm:p-10">
      <Image src="https://www.svgrepo.com/show/483652/hacker.svg" width={100} height={100} alt="" />
      <h1 className=" text-center text-5xl font-bold" > This Is a Dead Project</h1>
      <h2 className="text-md" >Rakha's Project</h2>
    </div>
  );
}
