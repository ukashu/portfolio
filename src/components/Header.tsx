import { SiGithub, SiLinkedin } from "react-icons/si/index.js"
import "../i18n/config"
import { useTranslation } from "react-i18next"

export default function Header() {
  const { t, i18n } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  return (
    <header className="min-h-1/5 z-10 flex flex-row items-center justify-evenly gap-1 pb-20 sm:px-32">
      <a href="https://github.com/" className=" flex flex-row items-center justify-around gap-2">
        <SiGithub size="1.5em" onClick={() => console.log("clicked")} />
        <strong className=" text-base font-semibold">GitHub</strong>
      </a>
      <a href="https://github.com/" className=" flex flex-row items-center justify-around gap-2">
        <SiLinkedin size="1.5em" onClick={() => console.log("clicked")} />
        <strong className=" text-base font-semibold">LinkedIn</strong>
      </a>
      <p className=" text-lg">
        <button onClick={() => changeLanguage("en")}>
          {i18n.language === "en" ? <p className="underline">ENG</p> : <p>ENG</p>}
        </button>{" "}
        /{" "}
        <button onClick={() => changeLanguage("pl")}>
          {i18n.language === "pl" ? <p className="underline">PL</p> : <p>PL</p>}
        </button>
      </p>
    </header>
  )
}
