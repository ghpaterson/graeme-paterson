import { BsArrowUpRightCircle } from "react-icons/bs";
import Link from "next/link";

export default function Projects() {
  const bloggyURL = "https://bloggy-inky.vercel.app/";
  const questURL = "https://jackquest.vercel.app/";

  return (
    <main>
      <section className="py-6">
        <h1 className="text-4xl font-neuton py-4">Projects</h1>
        <p>Here are some projects I am proud of...</p>
      </section>
      <section className="md:h-[55vh] grid grid-cols-1 md:grid-cols-12 gap-4 py-4">
        <div className="col-span-6 bg-sand/30 rounded-lg ">
          <div className="flex justify-between py-4 px-6 items-center ">
            <h1>Projects - Ollie Scarth</h1>
            <Link href="#" target="_blank">
              <BsArrowUpRightCircle className="text-xl group-hover:scale-110" />
            </Link>
          </div>
        </div>
        <div className="col-span-6 bg-thistle/30 rounded-lg ">
          <div className="flex justify-between py-4 px-6 items-center ">
            <h1>Projects - Mister Bloggy</h1>
            <Link href={bloggyURL} target="_blank">
              <BsArrowUpRightCircle className="text-xl group-hover:scale-110" />
            </Link>
          </div>
        </div>
      </section>
      <section className="md:h-[55vh] grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="col-span-6 bg-moss/30 rounded-lg ">
          <div className="flex justify-between py-4 px-6 items-center ">
            <h1>Projects - Jack's SpellQuest</h1>
            <Link href={questURL} target="_blank">
              <BsArrowUpRightCircle className="text-xl group-hover:scale-110" />
            </Link>
          </div>
        </div>
        <div className="col-span-6 bg-melon/30 rounded-lg ">
          <div className="flex justify-between py-4 px-6 items-center ">
            <h1>Projects - Decode Care</h1>
            <Link href="#" target="_blank">
              <BsArrowUpRightCircle className="text-xl group-hover:scale-110" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
