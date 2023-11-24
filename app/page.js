import Image from "next/image";
import portrait from "../public/images/portrait-cropped.png";
import { IoLocationOutline } from "react-icons/io5";

export default function Home() {
  return (
    <main className="mx-6 grid grid-cols-1">
      <section className="grid h-[100vh] md:h-[90vh] grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-span-4 rounded-lg bg-slate-300 px-6 py-6 flex flex-col gap-4">
          <div>
            <h1 className="text-3xl">Graeme Paterson</h1>
            <h2 className="text-xl">Software Developer</h2>
          </div>
          <div
            alt="Graeme Portrait"
            className="bg-Portrait bg-cover w-full h-[80%] flex flex-col rounded-md"
          />
          <div className="flex gap-2 items-center">
            <IoLocationOutline />
            <p className="text-lg">London, UK</p>
          </div>
        </div>
        <div className="md:col-span-8 grid grid-rows-2 gap-4">
          <div className="row-span-1 rounded-lg bg-gray-50"></div>
          <div className="row-span-1 rounded-lg bg-gray-200"></div>
        </div>
      </section>
      <section className="grid h-[100h] md:h-[50vh] grid-cols-1 md:grid-cols-12 gap-4 md:my-4">
        <div className=" md:col-span-4 rounded-lg bg-slate-300"></div>
        <div className=" md:col-span-4 rounded-lg bg-slate-400"></div>
        <div className=" md:col-span-4 rounded-lg bg-slate-500"></div>
      </section>
      <section className="grid h-[50vh] md:h-[50vh] grid-cols-1 md:grid-cols-12 gap-4">
        <div className=" md:col-span-8 rounded-lg bg-slate-300"></div>
        <div className=" md:col-span-4 rounded-lg bg-slate-400"></div>
      </section>
      <section className="grid h-[100vh] md:h-[50vh] grid-cols-1 md:grid-cols-12 gap-4 my-4">
        <div className=" md:col-span-4 rounded-lg bg-slate-300"></div>
        <div className=" md:col-span-4 rounded-lg bg-slate-400"></div>
        <div className=" md:col-span-4 rounded-lg bg-slate-500"></div>
      </section>
      <section className="grid h-[50vh] md:h-[50vh] grid-cols-1 md:grid-cols-12 gap-4">
        <div className=" md:col-span-4 rounded-lg bg-slate-300"></div>
        <div className=" md:col-span-8 rounded-lg bg-slate-400"></div>
      </section>
    </main>
  );
}
