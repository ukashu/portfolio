import { SiGithub, SiLinkedin } from "react-icons/si/index.js"

export default function Header() {
  return (
    <header className="min-h-1/5 z-10 flex flex-row items-center justify-evenly gap-1 pb-20 sm:px-32">
      <a href="https://github.com/" className=" flex flex-row items-center justify-around gap-2">
        <SiGithub size="1.5em" onClick={() => console.log("clicked")} />
        <strong className=" text-base font-semibold">GitHub</strong>
      </a>
      <a href="https://github.com/" className=" flex flex-row items-center justify-around gap-2">
        <SiLinkedin size="1.5em" onClick={() => console.log("clicked")} />
        <strong className=" text-base font-semibold">LinkedIn</strong>
      </a>
      <p className=" text-lg">
        <button onClick={() => console.log("hellolololo")}>ENG</button> / <button>PL</button>
      </p>
    </header>
  )
}
