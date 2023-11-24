import Image from "next/image";
import Link from "next/link";
import questPhone from "../public/images/questPhone.png";
import { BsArrowUpRightCircle } from "react-icons/bs";

export default function RowThree() {
  const questURL = "https://jackquest.vercel.app/";
  return (
    <section
      id="row-three"
      className="grid h-[100vh] md:h-[55vh] grid-cols-1 md:grid-cols-12 gap-4 my-4"
    >
      <div className=" md:col-span-4 rounded-lg bg-slate-300"></div>
      <div className=" md:col-span-4 rounded-lg bg-slate-400 flex flex-col justify-between">
        <div className="flex justify-between py-4 px-4 items-center">
          <h1>Photography - Tooting</h1>
        </div>
        <div className="w-full h-[90%] bg-Picnic bg-cover rounded-md"></div>
      </div>
      <div className=" md:col-span-4 rounded-lg bg-slate-500 overflow-hidden">
        <div className="flex justify-between py-4 px-4 items-center">
          <h1>Projects - Decode Care</h1>
          <Link href={questURL} target="_blank">
            <BsArrowUpRightCircle className="text-xl" />
          </Link>
        </div>
        <Image
          src={questPhone}
          width={200}
          alt="Bloggy Phone"
          className=" -rotate-20 mt-6 ml-20 md:ml-40"
        />
      </div>
    </section>
  );
}
