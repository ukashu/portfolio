import React from "react"
import { BiLogoGithub } from "react-icons/bi"

export default function Header() {
  return (
    <header className=" min-h-1/5 flex flex-row items-center justify-around pb-20">
      <BiLogoGithub size="1.5em" onClick={() => console.log("clicked")} />
      <p className=" text-base">johndoe4@geilcom</p>
      <strong className=" text-lg font-semibold">123456789</strong>
      <p className=" text-lg">
        <button onClick={() => console.log("hellolololo")}>ENG</button> / <button>PL</button>
      </p>
    </header>
  )
}
