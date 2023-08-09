import Background from "./Background"
import BackgroundMobile from "./BackgroundMobile"

export default function BackgroundCheck() {
  const isMobile = window.innerWidth <= 801
  console.log({ mobile: isMobile })

  return isMobile ? <BackgroundMobile /> : <Background />
}
