import Image from "next/image";

export default function Home() {
  return (
    <main class="mx-6 my-4 grid grid-cols-1">
      <section class="grid h-[100vh] md:h-[80vh] grid-cols-1 md:grid-cols-12 gap-4">
        <div class="md:col-span-4 rounded-lg bg-slate-300">
          <div class="flex flex-col px-2 py-2 md:py-4"></div>
        </div>
        <div class="md:col-span-8 grid grid-rows-2 gap-4">
          <div class="row-span-1 rounded-lg bg-gray-50"></div>
          <div class="row-span-1 rounded-lg bg-gray-200"></div>
        </div>
      </section>
      <section class="grid h-[100h] md:h-[50vh] grid-cols-1 md:grid-cols-12 gap-4 md:my-4">
        <div class=" md:col-span-4 rounded-lg bg-slate-300"></div>
        <div class=" md:col-span-4 rounded-lg bg-slate-400"></div>
        <div class=" md:col-span-4 rounded-lg bg-slate-500"></div>
      </section>
      <section class="grid h-[50vh] md:h-[50vh] grid-cols-1 md:grid-cols-12 gap-4">
        <div class=" md:col-span-8 rounded-lg bg-slate-300"></div>
        <div class=" md:col-span-4 rounded-lg bg-slate-400"></div>
      </section>
      <section class="grid h-[100vh] md:h-[50vh] grid-cols-1 md:grid-cols-12 gap-4 my-4">
        <div class=" md:col-span-4 rounded-lg bg-slate-300"></div>
        <div class=" md:col-span-4 rounded-lg bg-slate-400"></div>
        <div class=" md:col-span-4 rounded-lg bg-slate-500"></div>
      </section>
      <section class="grid h-[50vh] md:h-[50vh] grid-cols-1 md:grid-cols-12 gap-4">
        <div class=" md:col-span-4 rounded-lg bg-slate-300"></div>
        <div class=" md:col-span-8 rounded-lg bg-slate-400"></div>
      </section>
    </main>
  );
}
