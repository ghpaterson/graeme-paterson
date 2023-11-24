import RowOne from "@/components/RowOne";
import RowThree from "@/components/RowThree";
import RowTwo from "@/components/RowTwo";
import Hero from "@/components/hero";
import RowFour from "@/components/RowFour";

export default function Home() {
  return (
    <main className="mx-6 grid grid-cols-1">
      <Hero />
      <RowOne />
      <RowTwo />
      <RowThree />
      <RowFour />
    </main>
  );
}
