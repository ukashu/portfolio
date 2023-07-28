export default function Background() {
  return (
    <div className=" fixed bottom-0 left-[calc(100%-800px)] right-0 top-0 z-[-100] flex min-w-[1200px] justify-center md:left-0">
      <svg className="" viewBox="-50 100 1800 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          <linearGradient id="paint1_linear_22_31" x1="1100" y1="871" x2="1379" y2="246" gradientUnits="userSpaceOnUse">
            <stop stopColor="#14004D" />
            <stop offset="1" stopColor="#4B006F" stopOpacity="0.68" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
