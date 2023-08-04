import newHomeShowcase from "../images/newHomeShowcase.png"
import nh_logo from "../images/nh_logo.svg"
import { SiTypescript, SiReact, SiTailwindcss, SiUndertale, SiGithub } from "react-icons/si/index.js"
import Tooltip from "../components/Tooltip"
import "../i18n/config"
import { useTranslation } from "react-i18next"

export default function NewHomeShowcase() {
  const { t } = useTranslation()

  return (
    <div className="left-0 top-0 flex min-h-[95vh] flex-1 flex-col justify-between gap-1 p-1 text-nh-white max-lg:pb-10 md:flex-row lg:gap-10 lg:p-10">
      <div className=" bg-transparent w-100% flex flex-row flex-wrap items-center justify-around rounded-xl md:w-8/12 lg:gap-x-20 lg:rounded-3xl">
        <img
          src={newHomeShowcase}
          className="h-auto max-w-[100%] object-contain drop-shadow-lg duration-200 ease-in hover:z-30 hover:scale-150 max-md:max-w-[10%] md:max-h-[40%] md:rounded-xl"></img>
      </div>
      <div className="w-100% flex flex-col justify-between gap-12 rounded-xl md:w-4/12 lg:rounded-3xl">
        <img src={nh_logo} className=" w-full rounded-3xl"></img>
        <div className="w-100% flex flex-grow flex-col justify-around rounded-xl bg-nh-grey-light bg-opacity-80 p-2 lg:rounded-3xl lg:p-6">
          <div>
            <h1 className=" pb-6 text-center text-xl font-semibold">{t("nh.title")}</h1>
            <p className=" text-base">{t("nh.description")}</p>
          </div>
          <div>
            <h1 className=" text-xl font-semibold">{t("nh.features.title")}</h1>
            <ul className=" text-base">
              <li>- {t("nh.features.1")}</li>
              <li>- {t("nh.features.2")}</li>
              <li>- {t("nh.features.3")}</li>
              <li>- {t("nh.features.4")}</li>
              <li>- {t("nh.features.5")}</li>
              <li>- {t("nh.features.6")}</li>
              <li>- {t("nh.features.7")}</li>
            </ul>
          </div>
          <Tooltip message="Check out the project repository on GitHub!">
            <SiGithub size="2em" />
          </Tooltip>
        </div>
        <div className="w-100% flex flex-col gap-3 rounded-xl bg-nh-grey-light bg-opacity-80 p-2 lg:rounded-3xl lg:p-6">
          <h1 className=" font-semibold">{t("nh.techUsed")}</h1>
          <div className=" flex flex-grow flex-row flex-wrap items-center justify-center gap-3">
            <Tooltip message="TypeScript">
              <SiTypescript size="2em" />
            </Tooltip>
            <Tooltip message="React">
              <SiReact size="2em" />
            </Tooltip>
            <Tooltip message="Tailwind">
              <SiTailwindcss size="2em" />
            </Tooltip>
            <Tooltip message="Plasmo">
              <SiUndertale size="2em" />
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  )
}
