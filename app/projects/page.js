import { BsArrowUpRightCircle } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  const bloggyURL = "https://bloggy-inky.vercel.app/";
  const questURL = "https://jackquest.vercel.app/";

  return (
    <main className="md:mx-6">
      <section className="py-6">
        <h1 className="text-4xl font-neuton py-4">Projects</h1>
        <p>Here are some projects I am proud of...</p>
      </section>
      <section className=" grid grid-cols-1 md:grid-cols-12 gap-4 py-4">
        <div className="group col-span-6 bg-sand/30 hover:bg-sand rounded-lg ">
          <div className="flex justify-between py-4 px-6 items-center ">
            <h1>Projects - Ollie Scarth</h1>
            <Link href="#" target="_blank">
              <BsArrowUpRightCircle className="text-xl group-hover:scale-110" />
            </Link>
          </div>
        </div>
        <div className="group col-span-6 bg-thistle/30 hover:bg-thistle rounded-lg ">
          <div className="flex justify-between py-4 px-6 items-center ">
            <h1>Projects - Mister Bloggy</h1>
            <Link href={bloggyURL} target="_blank">
              <BsArrowUpRightCircle className="text-xl group-hover:scale-110" />
            </Link>
          </div>
          <div className="w-full flex items-center justify-center py-10 px-4 md:px-0">
            <Image
              src="/images/BloggyCombo.png"
              alt="Mister Bloggy Mockup"
              width={600}
              height={150}
            />
          </div>
          <div className="md:px-10 md:pb-4">
            <h1 className="text-2xl font-neuton py-2">The Brief</h1>
            <p>
              Do my friends and I like nice things? Yes. Do we like to share
              nice things with each other? Sometimes. Mister Bloggy is a social
              media web app that lets us be pretencious about anything in the
              world of music, food and design. It's not really a secret
            </p>
          </div>
        </div>
        <div className="group col-span-6 bg-moss/30 hover:bg-moss rounded-lg ">
          <div className="flex justify-between py-4 px-6 items-center ">
            <h1>Projects - Jack's SpellQuest</h1>
            <Link href={questURL} target="_blank">
              <BsArrowUpRightCircle className="text-xl group-hover:scale-110" />
            </Link>
          </div>
          <div className="w-full flex items-center justify-center py-10 px-4 md:px-0">
            <Image
              src="/images/QuestCombo.png"
              alt="Jacks SpellQuest Mockup"
              width={600}
              height={150}
            />
          </div>
          <div className="md:px-10 md:pb-4">
            <h1 className="text-2xl font-neuton py-2">The Brief</h1>
            <p>
              Jack's SpellQuest has been built and designed in collaboration
              with the Child Development Network to assist my nephew Jack on his
              journey to stay in school (he's five). A sister site called Decode
              Care exists but I wanted to shout-out Jack! Currently being
              trialed by the kids with constant feedback
            </p>
          </div>
        </div>
        <div className="group col-span-6 bg-melon/30 hover:bg-melon rounded-lg ">
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
