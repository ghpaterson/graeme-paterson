import Image from "next/image";
import Link from "next/link";
import questPhone from "../public/images/questPhone.png";
import { BsArrowUpRightCircle } from "react-icons/bs";

export default function RowThree() {
  const questURL = "https://jackquest.vercel.app/";
  const alldayGoodsURL = "https://www.alldaygoods.co.uk/";
  return (
    <section
      id="row-three"
      className="grid md:h-[55vh] grid-cols-1 md:grid-cols-12 gap-4 my-4"
    >
      <div className="group md:col-span-4 rounded-lg bg-melon/30 hover:bg-melon px-4 py-4 md:py-0">
        <div className="flex justify-between md:py-4 items-center">
          <h1>Hobbies - Cooking</h1>
          <Link href={alldayGoodsURL} target="_blank">
            <BsArrowUpRightCircle className="text-xl group-hover:scale-110" />
          </Link>
        </div>
        <div className="flex mt-10 md:mt-20 gap-6 items-end">
          <Image
            src="/images/AllDayGoods.png"
            alt="Cooking"
            height={100}
            width={150}
            className="rounded-lg"
          />
          <div className="flex flex-col text-sm md:text-md">
            <h1 className="text-2xl md:text-3xl py-2 font-neuton">
              Allday Goods
            </h1>
            <p>Kitchen Knives</p>
            <p>Made from Plastic Waste</p>
          </div>
        </div>
      </div>
      <div className=" md:col-span-4 rounded-lg bg-sand/30 hover:bg-sand flex flex-col justify-between">
        <div className="flex justify-between py-4 px-4 items-center">
          <h1>Hobbies - Photography</h1>
        </div>
        <div className="w-full h-44 md:h-[90%] bg-Picnic bg-cover rounded-md"></div>
      </div>
      <div className="group md:col-span-4 rounded-lg bg-moss/30 hover:bg-moss overflow-hidden">
        <div className="flex justify-between py-4 px-4 items-center">
          <h1>Projects - Jack's SpellQuest</h1>
          <Link href={questURL} target="_blank">
            <BsArrowUpRightCircle className="text-xl group-hover:scale-110" />
          </Link>
        </div>
        <Image
          src={questPhone}
          width={200}
          alt="SpellQuest Phone"
          className=" -rotate-20 mt-6 ml-20 md:ml-40 group-hover:scale-110 transition-transform"
        />
      </div>
    </section>
  );
}
