import { SiGithub, SiNpm } from "react-icons/si/index.js"
import { ImNewTab } from "react-icons/im/index.js"

type Props = {
  backgroundColor: string
  iconColor: string
  serviceName: "GitHub" | "NPM" | "Link"
}

export default function OpenInButton(props: Props) {
  return (
    <button
      style={{ backgroundColor: props.backgroundColor, color: props.iconColor }}
      className=" flex flex-row items-center gap-2 rounded-lg p-2">
      <p className=" text-xs font-semibold">Open in {props.serviceName}</p>
      {props.serviceName === "GitHub" && <SiGithub size="1em" />}
      {props.serviceName === "NPM" && <SiNpm size="1em" />}
      {props.serviceName === "Link" && <ImNewTab size="1em" />}
    </button>
  )
}
