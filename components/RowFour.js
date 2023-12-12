import Link from "next/link";
import { BsArrowUpRightCircle } from "react-icons/bs";
import Image from "next/image";

export default function RowFour() {
  return (
    <section
      id="row-four"
      className="grid h-[50vh] md:h-[55vh] grid-cols-1 md:grid-cols-12 gap-4"
    >
      <div className=" md:col-span-4 rounded-lg bg-slate-300 px-4 py-4">
        <h1>Listening - Albums</h1>
        <Image
          src="/images/RawDataFeel.webp"
          alt="Raw Data Feel Album Cover"
          width={200}
          height={200}
          className="mt-6 mb-4"
        />
        <h2 className="text-lg md:text-2xl">Raw Data Feel</h2>
        <h3 className="text-md md:text-xl text-gray-700">
          Everything Everything
        </h3>
        <h4>2022</h4>
      </div>
      <div className=" md:col-span-8 rounded-lg bg-slate-400 flex flex-col justify-between">
        <div className="flex justify-between py-4 px-4 items-center">
          <h1>Hobbies - Photography</h1>
        </div>
        <div className="w-full h-[90%] bg-Farm bg-cover rounded-md"></div>
      </div>
    </section>
  );
}
