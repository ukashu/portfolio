import { BsFillCaretDownFill } from "react-icons/bs/index.js"
import { BsFillCaretUpFill } from "react-icons/bs/index.js"
import { BsFillCircleFill } from "react-icons/bs/index.js"
import { useState, useEffect } from "react"

export default function ScrollIcon() {
  const [page, setPage] = useState({
    carets: "opacity-0",
    one: "opacity-0",
    two: "opacity-0",
    three: "opacity-0"
  })

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll)
    return () => window.removeEventListener("scroll", listenToScroll)
  }, [page])

  const listenToScroll = () => {
    let sectionOne = document.getElementById("landing")!.offsetHeight
    let sectionTwo = document.getElementById("gt")!.offsetHeight
    let sectionThree = document.getElementById("nh")!.offsetHeight

    const winScroll = document.body.scrollTop || document.documentElement.scrollTop

    if (winScroll > sectionOne + Math.floor(sectionTwo / 2)) {
      if (page.three === "opacity-100") {
        return
      }
      setPage({
        carets: "opacity-100",
        one: "opacity-40",
        two: "opacity-40",
        three: "opacity-100"
      })
    } else if (winScroll > Math.floor(sectionOne / 2)) {
      if (page.two === "opacity-100") {
        return
      }
      setPage({
        carets: "opacity-100",
        one: "opacity-40",
        two: "opacity-100",
        three: "opacity-40"
      })
    } else {
      if (page.one === "opacity-100") {
        return
      }
      setPage({
        carets: "opacity-0",
        one: "opacity-0",
        two: "opacity-0",
        three: "opacity-0"
      })
    }
  }

  function scrollToSection(id: string) {
    console.log("you're fired!!!")
    document.querySelector(`#${id}`)!.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="invisible fixed right-4 top-[calc(50%-5em)] z-30 flex cursor-pointer flex-col items-center gap-1 opacity-0 transition duration-300 group-hover/section:opacity-100 lg:visible">
      <BsFillCaretUpFill size="1.2em" className={page.carets} onClick={() => scrollToSection("landing")} />
      <div className={page.one}>
        <BsFillCircleFill size="0.7em" onClick={() => scrollToSection("landing")} />
      </div>
      <div className={page.two}>
        <BsFillCircleFill size="0.7em" onClick={() => scrollToSection("gt")} />
      </div>
      <div className={page.three}>
        <BsFillCircleFill size="0.7em" onClick={() => scrollToSection("nh")} />
      </div>
      <BsFillCaretDownFill size="1.2em" className={page.carets} onClick={() => scrollToSection("nh")} />
    </div>
  )
}
