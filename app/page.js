import RowOne from "@/components/RowOne";
import RowThree from "@/components/RowThree";
import RowTwo from "@/components/RowTwo";
import Hero from "@/components/hero";
import RowFour from "@/components/RowFour";
import LoaderExperiment from "@/components/loaderExperiment";

export default function Home() {
  return (
    <main className="md:mx-6 py-10 md:py-0 grid grid-cols-1">
      {/* <LoaderExperiment /> */}
      <Hero />
      <RowOne />
      <RowTwo />
      <RowThree />
      <RowFour />
    </main>
  );
}
