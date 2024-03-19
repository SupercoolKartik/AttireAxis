import Image from "next/image";

export default function Home() {
  return (
    <main className=" bg-slate-500 flex flex-col items-center justify-between">
      <img
        className="w-100 h-auto"
        src="landingPageBanner.jpg"
        alt="landing_page_banner"
      />
    </main>
  );
}
