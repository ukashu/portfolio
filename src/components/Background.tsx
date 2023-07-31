import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion"
import { MouseEvent, useState, useEffect } from "react"

export default function Background() {
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll)
    return () => window.removeEventListener("scroll", listenToScroll)
  }, [])

  let color1R = useMotionValue(75)
  const springColor1R = useSpring(color1R, { stiffness: 1000, damping: 100 })
  let color1G = useMotionValue(0)
  const springColor1G = useSpring(color1G, { stiffness: 1000, damping: 100 })
  let color1B = useMotionValue(111)
  const springColor1B = useSpring(color1B, { stiffness: 1000, damping: 100 })
  let color2G = useMotionValue(0)
  const springColor2G = useSpring(color2G, { stiffness: 1000, damping: 100 })
  let color2R = useMotionValue(75)
  const springColor2R = useSpring(color2R, { stiffness: 1000, damping: 100 })
  let color2B = useMotionValue(77)
  const springColor2B = useSpring(color2B, { stiffness: 1000, damping: 100 })

  const listenToScroll = () => {
    let heightToHideFrom = Math.floor(window.innerHeight / 2)
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop

    if (winScroll > heightToHideFrom * 3) {
      color1R.set(96)
      color1G.set(96)
      color1B.set(96)
      color2R.set(228)
      color2G.set(228)
      color2B.set(231)
      document.body.style.backgroundColor = "rgb(52, 52, 52)"
      document.body.style.color = "rgb(228,228,231)"
    } else if (winScroll > heightToHideFrom) {
      color1R.set(200)
      color1G.set(0)
      color1B.set(20)
      color2R.set(99)
      color2G.set(0)
      color2B.set(12)
      document.body.style.backgroundColor = "rgb(153, 212, 255)"
      document.body.style.color = "rgb(48,131,255)"
    } else {
      color1R.set(75)
      color1G.set(0)
      color1B.set(111)
      color2R.set(20)
      color2G.set(0)
      color2B.set(77)
      document.body.style.backgroundColor = "#292929"
      document.body.style.color = "#FCFF74"
    }
  }

  let mouseX = useMotionValue(-50)
  const springX = useSpring(mouseX, { stiffness: 200, damping: 100 })
  let mouseY = useMotionValue(1800)
  const springY = useSpring(mouseY, { stiffness: 200, damping: 100 })
  let mouseA = useMotionValue(50)
  const springA = useSpring(mouseA, { stiffness: 200, damping: 100 })
  let mouseB = useMotionValue(1000)
  const springB = useSpring(mouseB, { stiffness: 200, damping: 100 })

  function handleMouseMove({ clientX, clientY, currentTarget }: MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect()

    let windowWidth = window.innerWidth
    let windowHeight = window.innerHeight

    let xPosition = clientX - left
    let yPosition = clientY - top

    let horizontal = Math.round(((xPosition / windowWidth).toFixed(2) as any) * 100)
    let vertical = Math.round(((yPosition / windowHeight).toFixed(2) as any) * 100)

    mouseX.set(-100 + horizontal)
    mouseY.set(1750 + vertical)
    mouseA.set(0 + horizontal)
    mouseB.set(950 + vertical)
  }

  return (
    <div id="hide">
      <div onMouseMove={handleMouseMove} className=" fixed bottom-0 left-0 right-0 top-0 z-0 justify-center"></div>
      <div className=" fixed bottom-0 left-[calc(100%-800px)] right-0 top-0 z-[-10] flex min-w-[1200px] justify-center transition duration-1000 group-hover/section:opacity-100 sm:opacity-0 md:left-0">
        <motion.svg
          transition={{ type: "inertia" }}
          viewBox={useMotionTemplate`${springX} ${springA} ${springY} ${springB}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_f_22_31)">
            <path
              d="M1159 478C1193 601 891 802 637 861C420 861 126 850 184 701.5C273 530 492 311 710 311C927 311 1100 315 1159 478Z"
              fill="url(#paint0_linear_22_31)"
            />
            <path
              d="M986 359C1009 235 1228 88 1361 272C1493 454 1514 824 1407 940C1267 1065 1224 786 1053 709C882 633 940 519 986 359Z"
              fill="url(#paint1_linear_22_31)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_22_31"
              x="-23"
              y="-14.3671"
              width="1698.71"
              height="1186.59"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_22_31" />
            </filter>
            <linearGradient id="paint0_linear_22_31" x1="669" y1="311" x2="669" y2="861" gradientUnits="userSpaceOnUse">
              <motion.stop stopColor={useMotionTemplate`rgb(${springColor1R},${springColor1G},${springColor1B})`} />
              <motion.stop
                offset="1"
                stopColor={useMotionTemplate`rgb(${springColor2R},${springColor2G},${springColor2B})`}
              />
            </linearGradient>
            <linearGradient
              id="paint1_linear_22_31"
              x1="1100"
              y1="871"
              x2="1379"
              y2="246"
              gradientUnits="userSpaceOnUse">
              <motion.stop stopColor={useMotionTemplate`rgb(${springColor2R},${springColor2G},${springColor2B})`} />
              <motion.stop
                offset="1"
                stopColor={useMotionTemplate`rgb(${springColor1R},${springColor1G},${springColor1B})`}
                stopOpacity="0.68"
              />
            </linearGradient>
          </defs>
        </motion.svg>
      </div>
    </div>
  )
}
