import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bg-red-500  rounded-md">Home Page</div>
      <p className="bg-slate-600">This is the Homepage of AttireAxis</p>
    </main>
  );
}
