import "./OtherShowcase.css"
import { useState, useEffect } from "react"
import Card from "../components/Card"
import {
  SiExpress,
  SiJavascript,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiGoogle,
  SiVite,
  SiJest,
  SiTypescript,
  SiWebpack,
  SiAstro,
  SiPuppeteer
} from "react-icons/si/index.js"
import { BsFillCaretRightFill, BsFillCaretLeftFill } from "react-icons/bs/index.js"
import SLAdiagram from "../images/SLAdiagram.png"
import "../i18n/config"
import { useTranslation } from "react-i18next"

export default function OtherShowcase() {
  const { t } = useTranslation()

  const [currentlyFocusedCard, setCurrentlyFocusedCard] = useState(2)

  useEffect(() => {
    scrollToCard(currentlyFocusedCard as any)
  }, [currentlyFocusedCard])

  function scrollRight() {
    if (currentlyFocusedCard === 4) {
      return
    }
    setCurrentlyFocusedCard((prevState) => prevState + 1)
  }

  function scrollLeft() {
    if (currentlyFocusedCard === 0) {
      return
    }
    setCurrentlyFocusedCard((prevState) => prevState - 1)
  }

  function scrollToCard(id: string) {
    document.querySelector(`#card${id}`)!.scrollIntoView({ behavior: "smooth", inline: "center" })
  }

  return (
    <div className=" flex h-full flex-grow flex-col items-center justify-around px-6 pb-6">
      <div className=" h-[10vh] w-full text-center text-4xl font-semibold">
        <p>Other projects</p>
      </div>
      <button onClick={() => scrollLeft()} className=" absolute left-20 z-20">
        <BsFillCaretLeftFill size="2em" />
      </button>
      <button onClick={() => scrollRight()} className=" absolute right-20 z-20">
        <BsFillCaretRightFill size="2em" />
      </button>
      <div
        id="horizontal"
        className="flex h-[60vh] w-screen flex-grow flex-row items-center gap-32 overflow-x-scroll px-[calc(50vw-300px)] py-36">
        <Card id={0} header={t("other.flight-route.header")} description={t("other.flight-route.description")}>
          <SiJavascript size="2em" />
          <SiNodedotjs size="2em" />
          <SiExpress size="2em" />
          <SiPostgresql size="2em" />
          <SiPrisma size="2em" />
          <SiReact size="2em" />
          <SiPostgresql size="2em" />
          <SiGoogle size="2em" />
          <SiVite size="2em" />
          <SiJest size="2em" />
        </Card>
        <Card id={1} header={t("other.sla.header")} description={t("other.sla.description")} imageSrc={SLAdiagram}>
          <SiJavascript size="2em" />
          <SiNodedotjs size="2em" />
          <SiExpress size="2em" />
        </Card>
        <Card
          id={2}
          header={t("other.react-native-boring-avatars.header")}
          description={t("other.react-native-boring-avatars.description")}>
          <SiTypescript size="2em" />
          <SiWebpack size="2em" />
        </Card>
        <Card id={3} header={t("other.portfolio.header")} description={t("other.portfolio.description")}>
          <SiTypescript size="2em" />
          <SiReact size="2em" />
          <SiAstro size="2em" />
        </Card>
        <Card id={4} header={t("other.scraper.header")} description={t("other.scraper.description")}>
          <SiJavascript size="2em" />
          <SiNodedotjs size="2em" />
          <SiPuppeteer size="2em" />
        </Card>
      </div>
    </div>
  )
}
