import { useEffect } from "react"

export default function BackgroundMobile() {
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll)
    return () => {
      window.removeEventListener("scroll", listenToScroll)
    }
  }, [])

  let pageNumber = 1

  const listenToScroll = () => {
    let sectionOne = document.getElementById("landing")!.offsetHeight
    let sectionTwo = document.getElementById("gt")!.offsetHeight
    let sectionThree = document.getElementById("nh")!.offsetHeight

    const winScroll = document.body.scrollTop || document.documentElement.scrollTop

    if (winScroll > sectionThree + sectionTwo + Math.floor(sectionOne / 2)) {
      if (pageNumber === 4) {
        return
      }
      pageNumber = 4
      document.body.style.backgroundColor = "#D4DCF0"
      document.body.style.color = "#000463"
    } else if (winScroll > sectionOne + Math.floor(sectionTwo / 2)) {
      if (pageNumber === 3) {
        return
      }
      pageNumber = 3
      document.body.style.backgroundColor = "rgb(52, 52, 52)"
      document.body.style.color = "rgb(228,228,231)"
    } else if (winScroll > Math.floor(sectionOne / 2)) {
      if (pageNumber === 2) {
        return
      }
      pageNumber = 2
      document.body.style.backgroundColor = "rgb(153, 212, 255)"
      document.body.style.color = "rgb(48,131,255)"
    } else {
      if (pageNumber === 1) {
        return
      }
      pageNumber = 1
      document.body.style.backgroundColor = "#292929"
      document.body.style.color = "#FCFF74"
    }
  }

  return <div id="hide"></div>
}
