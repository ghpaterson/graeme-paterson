import Image from "next/image";
import Link from "next/link";
import bloggyPhone from "../public/images/blogPhone.png";
import { BsArrowUpRightCircle } from "react-icons/bs";

export default function RowOne() {
  const bloggyURL = "https://bloggy-inky.vercel.app/";
  return (
    <section
      id="row-one"
      className="grid h-[100h] md:h-[55vh] grid-cols-1 md:grid-cols-12 gap-4 md:my-4"
    >
      <div className="group md:col-span-4 rounded-lg bg-slate-300 overflow-hidden">
        <div className="flex justify-between py-4 px-4 items-center">
          <h1>Projects - Mister Bloggy</h1>
          <Link href={bloggyURL} target="_blank">
            <BsArrowUpRightCircle className="text-xl" />
          </Link>
        </div>
        <Image
          src={bloggyPhone}
          width={200}
          alt="Bloggy Phone"
          className=" -rotate-20 mt-6 ml-20 md:ml-40 group-hover:scale-110 transition-transform"
        />
      </div>
      <div className=" md:col-span-4 rounded-lg bg-slate-400"></div>
      <div className=" md:col-span-4 rounded-lg bg-slate-500"></div>
    </section>
  );
}
