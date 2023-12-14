import Image from "next/image";
import Link from "next/link";
import bloggyPhone from "../public/images/blogPhone.png";
import { BsArrowUpRightCircle } from "react-icons/bs";

export default function RowOne() {
  const bloggyURL = "https://bloggy-inky.vercel.app/";
  const headlessBlogURL =
    "https://headless-iota-five.vercel.app/posts/brutalism";
  return (
    <section
      id="row-one"
      className="grid h-[100h] md:h-[55vh] grid-cols-1 md:grid-cols-12 gap-4 my-4"
    >
      <div className="group md:col-span-4 rounded-lg bg-thistle/30 hover:bg-thistle overflow-hidden">
        <div className="flex justify-between py-4 px-6 items-center ">
          <h1>Projects - Mister Bloggy</h1>
          <Link href={bloggyURL} target="_blank">
            <BsArrowUpRightCircle className="text-xl group-hover:scale-110" />
          </Link>
        </div>
        <Image
          src={bloggyPhone}
          width={200}
          alt="Bloggy Phone"
          className=" -rotate-20 mt-6 ml-20 md:ml-40 group-hover:scale-110 transition-transform drop-shadow-2xl"
        />
      </div>
      <div className="group md:col-span-4 rounded-lg bg-sand/30 hover:bg-sand px-4 flex flex-col justify-between py-4">
        <div className="flex justify-between items-center">
          <h1>Writing - Blog</h1>
          <Link href={headlessBlogURL} target="_blank">
            <BsArrowUpRightCircle className="text-xl group-hover:scale-110" />
          </Link>
        </div>
        <div className="flex flex-col justify-end  gap-2 md:gap-4 pt-4">
          <h1 className="text-3xl font-neuton">{"BRUTALism (2023)"}</h1>
          <h2 className="text-lg text-gray-700">April 22, 2023</h2>
          <p>
            Are you ready to dive into the world of brutalist web design? Don't
            worry, I won't be using any big words or fancy jargon - we'll keep
            it chill and casual, just like a brutalist building!
          </p>
        </div>
      </div>
      <div className="group md:col-span-4 rounded-lg bg-melon/30 hover:bg-melon px-4 flex flex-col py-4">
        <h1>Listening - Albums</h1>
        <Image
          src="/images/YinYin.jpeg"
          alt="YinYin Album Cover"
          width={200}
          height={200}
          className="mt-6 mb-4 px-2 group-hover:scale-110 transition-transform"
        />
        <h2 className="text-lg md:text-3xl font-neuton">
          The Rabbit That Hunts Tigers
        </h2>
        <h3 className="text-md md:text-lg text-gray-700">Yin Yin</h3>
        <h4>2019</h4>
      </div>
    </section>
  );
}
