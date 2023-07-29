import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion"
import type { MouseEvent } from "react"

export default function Background() {
  let mouseX = useMotionValue(-50)
  const springX = useSpring(mouseX, { stiffness: 1000, damping: 100 })
  let mouseY = useMotionValue(1800)
  const springY = useSpring(mouseY, { stiffness: 1000, damping: 100 })
  let mouseA = useMotionValue(50)
  const springA = useSpring(mouseA, { stiffness: 1000, damping: 100 })
  let mouseB = useMotionValue(1000)
  const springB = useSpring(mouseB, { stiffness: 1000, damping: 100 })

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
    <div className="">
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
              <stop stopColor="#4B006F" />
              <stop offset="1" stopColor="#14004D" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_22_31"
              x1="1100"
              y1="871"
              x2="1379"
              y2="246"
              gradientUnits="userSpaceOnUse">
              <stop stopColor="#14004D" />
              <stop offset="1" stopColor="#4B006F" stopOpacity="0.68" />
            </linearGradient>
          </defs>
        </motion.svg>
      </div>
    </div>
  )
}
