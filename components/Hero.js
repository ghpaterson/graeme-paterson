import { IoLocationOutline } from "react-icons/io5";
import Link from "next/link";
import { BsArrowUpRightCircle } from "react-icons/bs";

export default function Hero() {
  return (
    <section
      id="header"
      className="grid h-[100vh] md:h-[90vh] grid-cols-1 md:grid-cols-12 gap-4"
    >
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
        <div className="row-span-1 rounded-lg bg-gray-200 px-4 py-4">
          <div className="flex justify-between items-center">
            <h1>Projects - Ollie Scarth</h1>
            <Link href="#" target="_blank">
              <BsArrowUpRightCircle className="text-xl" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
