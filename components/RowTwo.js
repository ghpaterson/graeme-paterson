import Link from "next/link";
import { BsArrowUpRightCircle } from "react-icons/bs";

export default function RowTwo() {
  return (
    <section
      id="row-two"
      className="grid h-[50vh] md:h-[55vh] grid-cols-1 md:grid-cols-12 gap-4"
    >
      <div className=" md:col-span-8 rounded-lg bg-moss/30 hover:bg-moss">
        <div className="flex justify-between py-4 px-4 items-center">
          <h1>Projects - Decode Care</h1>
          <Link href="#" target="_blank">
            <BsArrowUpRightCircle className="text-xl" />
          </Link>
        </div>
      </div>
      <div className=" md:col-span-4 rounded-lg bg-thistle/30 hover:bg-thistle flex flex-col justify-between">
        <div className="flex justify-between py-4 px-4 items-center">
          <h1>Hobbies - Photography</h1>
        </div>
        <div className="w-full h-[90%] bg-Bicycle bg-cover rounded-md"></div>
      </div>
    </section>
  );
}
