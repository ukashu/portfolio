import "../sections/OtherShowcase.css"
import Tooltip from "../components/Tooltip"

import OpenInButton from "./OpenInButton"
import "../i18n/config"
import { useTranslation } from "react-i18next"

type Props = {
  id: number
  header: string
  description: string
  imageSrc?: string
  children?: React.ReactNode | React.ReactNode[]
  gitHubUrl?: string
  npmUrl?: string
  linkUrl?: string
}

export default function Card(props: Props) {
  const { t } = useTranslation()

  let childrenWrapped

  if (props.children) {
    // @ts-ignore
    childrenWrapped = props.children.map((item: any) => {
      return (
        <Tooltip message={item.props.title} key={item.props.title}>
          {item}
        </Tooltip>
      )
    })
  }

  return (
    <div
      id={`card${props.id}`}
      className="card flex min-h-[60vh] min-w-full max-w-full flex-col items-center justify-between rounded-md bg-[#C5CDE0] bg-opacity-60 p-8 drop-shadow-xl md:min-w-[600px]">
      <div className=" flex flex-col items-center text-center">
        <h1 className=" text-center text-2xl font-semibold">{props.header}</h1>
        <img src={props.imageSrc} className=" w-2/6 pt-8"></img>
        <p className=" pt-8 text-center text-base">{props.description}</p>
        <h2 className=" pt-8 font-semibold">{t("builtWith")}</h2>
        <div className=" flex flex-row flex-wrap gap-2">{childrenWrapped}</div>
      </div>
      <div className=" justify-center] flex flex-row items-center gap-2 pt-8">
        <a href={props.gitHubUrl}>
          <OpenInButton serviceName="GitHub" backgroundColor="#000463" iconColor="#D4DCF0" />
        </a>
        {props.npmUrl && (
          <a href={props.npmUrl}>
            <OpenInButton serviceName="NPM" backgroundColor="#000463" iconColor="#D4DCF0" />
          </a>
        )}
        {props.linkUrl && (
          <a href={props.linkUrl}>
            <OpenInButton serviceName="Link" backgroundColor="#000463" iconColor="#D4DCF0" />
          </a>
        )}
      </div>
    </div>
  )
}
