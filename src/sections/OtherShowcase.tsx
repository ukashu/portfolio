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
  SiSocketdotio
} from "react-icons/si/index.js"
import { BsFillCaretRightFill, BsFillCaretLeftFill } from "react-icons/bs/index.js"
import sla_diagram from "../images/sla_diagram.jpg"
import boring_avatar from "../images/boring_avatar.svg"
import react_map_screenshot from "../images/react_map_screenshot.jpg"
import portfolio_screenshot from "../images/portfolio_screenshot.jpg"
import "../i18n/config"
import { useTranslation } from "react-i18next"

export default function OtherShowcase() {
  const { t } = useTranslation()

  const [currentlyFocusedCard, setCurrentlyFocusedCard] = useState(0)

  useEffect(() => {
    scrollToCard(currentlyFocusedCard as any)
  }, [currentlyFocusedCard])

  function scrollRight() {
    if (currentlyFocusedCard === 3) {
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
      <div className=" flex h-[10vh] w-full items-center justify-center text-center text-4xl font-semibold">
        <p>Other projects</p>
      </div>
      <button onClick={() => scrollLeft()} className=" absolute left-0 z-20 md:left-20">
        <BsFillCaretLeftFill size="2em" />
      </button>
      <button onClick={() => scrollRight()} className=" absolute right-0 z-20 md:right-20">
        <BsFillCaretRightFill size="2em" />
      </button>
      <div
        id="horizontal"
        className="flex min-h-[60vh] w-screen flex-grow flex-row items-center gap-32 overflow-x-scroll px-[calc(50vw-300px)] py-36">
        <Card
          id={0}
          header={t("other.flight-route.header")}
          description={t("other.flight-route.description")}
          imageSrc={react_map_screenshot}>
          <SiJavascript size="2em" title="JavaScript" />
          <SiNodedotjs size="2em" title="NodeJS" />
          <SiExpress size="2em" title="ExpressJS" />
          <SiPostgresql size="2em" title="PostgreSQL" />
          <SiPrisma size="2em" title="Prisma" />
          <SiReact size="2em" title="React" />
          <SiGoogle size="2em" title="Google Sign-in" />
          <SiVite size="2em" title="Vite" />
          <SiJest size="2em" title="Jest" />
        </Card>
        <Card id={1} header={t("other.sla.header")} description={t("other.sla.description")} imageSrc={sla_diagram}>
          <SiJavascript size="2em" title="JavaScript" />
          <SiNodedotjs size="2em" title="NodeJS" />
          <SiExpress size="2em" title="ExpressJS" />
          <SiSocketdotio size="2em" title="SocketIO" />
        </Card>
        <Card
          id={2}
          header={t("other.react-native-boring-avatars.header")}
          description={t("other.react-native-boring-avatars.description")}
          imageSrc={boring_avatar}
          npmUrl="https://www.npmjs.com/">
          <SiTypescript size="2em" title="TypeScript" />
          <SiWebpack size="2em" title="Webpack" />
        </Card>
        <Card
          id={3}
          header={t("other.portfolio.header")}
          description={t("other.portfolio.description")}
          imageSrc={portfolio_screenshot}
          linkUrl="https://ukashu.vercel.app/">
          <SiTypescript size="2em" title="TypeScript" />
          <SiReact size="2em" title="React" />
          <SiAstro size="2em" title="Astro" />
        </Card>
      </div>
    </div>
  )
}
