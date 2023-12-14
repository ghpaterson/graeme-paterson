import { BsArrowUpRightCircle } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({
  title,
  link,
  image,
  alt,
  bgColor,
  brief,
}) {
  return (
    <div
      className={`group col-span-6 ${bgColor} hover:${bgColor.replace(
        "/30",
        ""
      )} rounded-lg`}
    >
      <div className="flex justify-between py-4 px-6 items-center">
        <h1>{title}</h1>
        <Link href={link} target="_blank">
          <BsArrowUpRightCircle className="text-xl group-hover:scale-110" />
        </Link>
      </div>
      <div className="w-full flex items-center justify-center py-10 px-4 md:px-0 group-hover:scale-105 transition-transform">
        <Image src={image} alt={alt} width={600} height={150} />
      </div>
      <div className="md:px-10 px-4 pb-4">
        <h1 className="text-2xl font-neuton py-2">The Brief</h1>
        <p>{brief}</p>
      </div>
    </div>
  );
}
