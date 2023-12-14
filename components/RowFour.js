import Link from "next/link";
import { BsArrowUpRightCircle } from "react-icons/bs";
import Image from "next/image";

export default function RowFour() {
  return (
    <section
      id="row-four"
      className="grid md:h-[55vh] grid-cols-1 md:grid-cols-12 gap-4"
    >
      <div className="group md:col-span-4 rounded-lg bg-thistle/30 hover:bg-thistle px-4 py-4">
        <h1>Listening - Albums</h1>
        <Image
          src="/images/RawDataFeel.webp"
          alt="Raw Data Feel Album Cover"
          width={200}
          height={200}
          className="mt-6 mb-4 px-2 group-hover:scale-110 transition-transform"
        />
        <h2 className="text-2xl md:text-3xl font-neuton">Raw Data Feel</h2>
        <h3 className="text-md md:text-lg text-gray-700">
          Everything Everything
        </h3>
        <h4>2022</h4>
      </div>
      <div className=" md:col-span-8 rounded-lg bg-melon/30 hover:bg-melon flex flex-col justify-between">
        <div className="flex justify-between py-4 px-4 items-center">
          <h1>Hobbies - Photography</h1>
        </div>
        <div className="w-full h-44 md:h-[90%] bg-Farm bg-cover rounded-md"></div>
      </div>
    </section>
  );
}
