import Header from "../components/Header"
import Main from "../components/Main"
import Footer from "../components/Footer"
import { BsFillCaretDownFill } from "react-icons/bs/index.js"

export default function LandingPage() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <BsFillCaretDownFill
        size="1em"
        className=" animate-bounce self-center transition duration-500 group-hover/section:opacity-100 sm:opacity-0"
        id="down-caret"
      />
    </>
  )
}
