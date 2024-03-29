"use client";

import { IoLocationOutline } from "react-icons/io5";
import Link from "next/link";
import { BsArrowUpRightCircle } from "react-icons/bs";

export default function Hero() {
  const OllieScarthURL = "https://ollie-scarth.vercel.app/";

  return (
    <>
      <section
        id="header"
        className="grid md:h-[90vh] grid-cols-1 md:grid-cols-12 gap-4"
      >
        <div className=" md:col-span-4 rounded-lg bg-thistle px-6 py-6 flex flex-col gap-4">
          <div>
            <h1 className="text-2xl md:text-4xl font-neuton">
              Graeme Paterson
            </h1>
            <h2 className="text-md md:text-lg pt-4">Software Developer &</h2>
            <h2 className="text-md md:text-lg">Registered Paramedic</h2>
          </div>
          <div
            alt="Graeme Portrait"
            className="bg-Portrait bg-cover w-full h-80 md:h-[70%] flex flex-col rounded-md"
          />
          <div className="flex gap-2 items-center">
            <IoLocationOutline />
            <p className="text-lg">Brisbane, Australia</p>
          </div>
        </div>
        <div className="md:col-span-8 grid grid-rows-2 gap-4">
          <div className="row-span-1 rounded-lg">
            <h3 className="md:pr-20 pl-4 py-6 text-md md:text-3xl font-neuton leading-relaxed">
              Hey there, I’m Graeme 👋 Welcome to my personal webspace.{" "}
              <br></br>I am a Registered Paramedic and a Software Developer.{" "}
              <br></br>I like building things, and I’m currently helping to
              build Decode Care. <br></br>
              In my free time, I enjoy brewing coffee, listening to music,
              cooking and running.
            </h3>
          </div>
          <div className="group row-span-1 rounded-lg bg-moss/50 hover:bg-moss px-4 py-4 md:-mt-16">
            <div className="flex justify-between items-center">
              <h1>Projects - Ollie Scarth</h1>
              <Link href={OllieScarthURL} target="_blank">
                <BsArrowUpRightCircle className="text-xl group-hover:scale-110" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
