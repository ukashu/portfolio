import { BiLogoGithub } from "react-icons/bi"

export default function Header() {
  return (
    <header className=" min-h-1/5 flex flex-row items-center justify-evenly gap-1 pb-20">
      <a href="https://github.com/">
        <BiLogoGithub size="1.5em" onClick={() => console.log("clicked")} />
      </a>
      <p className=" text-base">johndoe4@geilcom</p>
      <strong className=" text-lg font-semibold">
        <p>+76 123456789</p>
      </strong>
      <p className=" text-lg">
        <button onClick={() => console.log("hellolololo")}>ENG</button> / <button>PL</button>
      </p>
    </header>
  )
}
