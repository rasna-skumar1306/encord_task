import ImagesTab from "@/components/ImagesTab";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* pages go here */}
      <ImagesTab />
    </main>
  );
}
