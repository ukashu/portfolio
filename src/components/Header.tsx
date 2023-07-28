import { SiGithub } from "react-icons/si"

export default function Header() {
  return (
    <header className="min-h-1/5 z-10 flex flex-row items-center justify-evenly gap-1 pb-20 sm:px-32">
      <a href="https://github.com/">
        <SiGithub size="1.5em" onClick={() => console.log("clicked")} />
      </a>
      <p className=" text-base">johndoe@gmail.com</p>
      <strong className=" text-lg font-semibold">
        <p>+76 123456789</p>
      </strong>
      <p className=" text-lg">
        <button onClick={() => console.log("hellolololo")}>ENG</button> / <button>PL</button>
      </p>
    </header>
  )
}
