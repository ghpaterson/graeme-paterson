import RowOne from "@/components/RowOne";
import RowThree from "@/components/RowThree";
import RowTwo from "@/components/RowTwo";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main className="mx-6 grid grid-cols-1">
      <Hero />
      <RowOne />
      <RowTwo />
      <RowThree />
      <section
        id="row-four"
        className="grid h-[50vh] md:h-[55vh] grid-cols-1 md:grid-cols-12 gap-4"
      >
        <div className=" md:col-span-4 rounded-lg bg-slate-300"></div>
        <div className=" md:col-span-8 rounded-lg bg-slate-400"></div>
      </section>
    </main>
  );
}
