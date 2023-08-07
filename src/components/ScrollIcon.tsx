import { BsFillCaretDownFill } from "react-icons/bs/index.js"
import { BsFillCaretUpFill } from "react-icons/bs/index.js"
import { BsFillCircleFill } from "react-icons/bs/index.js"
import { useState, useEffect } from "react"

export default function ScrollIcon() {
  const [page, setPage] = useState({
    one: "opacity-100",
    two: "opacity-40",
    three: "opacity-40"
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
        one: "opacity-40",
        two: "opacity-40",
        three: "opacity-100"
      })
    } else if (winScroll > Math.floor(sectionOne / 2)) {
      if (page.two === "opacity-100") {
        return
      }
      setPage({
        one: "opacity-40",
        two: "opacity-100",
        three: "opacity-40"
      })
    } else {
      if (page.one === "opacity-100") {
        return
      }
      setPage({
        one: "opacity-100",
        two: "opacity-40",
        three: "opacity-40"
      })
    }
  }

  return (
    <div className="fixed right-4 top-[calc(50%-5em)] flex flex-col items-center gap-1">
      <BsFillCaretUpFill size="1.5em" />
      <div className={page.one}>
        <BsFillCircleFill size="0.7em" />
      </div>
      <div className={page.two}>
        <BsFillCircleFill size="0.7em" />
      </div>
      <div className={page.three}>
        <BsFillCircleFill size="0.7em" />
      </div>
      <BsFillCaretDownFill size="1.5em" />
    </div>
  )
}
