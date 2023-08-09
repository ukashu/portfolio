import "../sections/OtherShowcase.css"
import Tooltip from "../components/Tooltip"

import { SiExpress, SiJavascript, SiNodedotjs } from "react-icons/si/index.js"
import OpenInButton from "./OpenInButton"
import type { ReactNode } from "react"
import "../i18n/config"
import { useTranslation } from "react-i18next"

type Props = {
  id: number
  header: string
  description: string
  imageSrc?: string
  children?: ReactNode | ReactNode[]
  gitHubUrl?: string
  npmUrl?: string
}

export default function Card(props: Props) {
  const { t } = useTranslation()

  return (
    <div
      id={`card${props.id}`}
      className="card flex min-h-full min-w-[600px] max-w-full flex-col items-center justify-between rounded-md bg-[#C5CDE0] bg-opacity-40 p-6 drop-shadow-md">
      <div className=" flex flex-col items-center text-center">
        <h1 className=" pb-10 text-center text-2xl font-semibold">{props.header}</h1>
        <img src={props.imageSrc} className=" w-2/6"></img>
        <p className=" p-2 py-6 text-center text-lg">{props.description}</p>
        <h2 className="pb-2 font-semibold">{t("built-with")}</h2>
        <div className=" flex flex-row gap-2">{props.children}</div>
      </div>
      <a href={props.gitHubUrl}>
        <OpenInButton serviceName="GitHub" backgroundColor="#000463" iconColor="#D4DCF0" />
        {props.npmUrl && <OpenInButton serviceName="NPM" backgroundColor="#000463" iconColor="#D4DCF0" />}
      </a>
    </div>
  )
}
