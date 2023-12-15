import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  const linkedinURL = "https://www.linkedin.com/in/ghpaterson/";
  const githubURL = "https://github.com/ghpaterson";
  return (
    <footer className="w-full flex flex-col md:flex-row justify-between py-20 px-6 gap-4 md:gap-0 ">
      <div>
        <h1 className="text-4xl font-neuton pb-6">Contact Me</h1>
        <div className="flex flex-col gap-2">
          <p>Graeme Paterson</p>
          <p>ghpaterson@gmail.com</p>
          <p>07481844603</p>
          <div className="flex gap-4 text-2xl items-center cursor-pointer">
            <Link href={linkedinURL} target="_blank" alt="link to linkedin">
              <FaLinkedin className="hover:scale-125 hover:text-melon" />
            </Link>
            <Link href={githubURL} target="_blank" alt="link to github">
              <FaGithub className="hover:scale-125 hover:text-melon" />
            </Link>
            <Link href="/GraemePaterson-CV.pdf" target="_blank">
              <h1 className="font-neuton text-3xl -mt-1 hover:scale-125 hover:text-melon">
                CV
              </h1>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-end">
        <p>&copy; Graeme Paterson 2023</p>
      </div>
    </footer>
  );
}
