import {
  BiLogoTypescript,
  BiLogoJavascript,
  BiLogoNodejs,
  BiLogoReact,
  BiLogoGit,
  BiLogoGithub,
  BiLogoFigma,
  BiLogoPostgresql,
  BiLogoTailwindCss,
  BiLogoHtml5,
  BiLogoCss3
} from "react-icons/bi"
import { SiExpress, SiPrisma, SiLinux } from "react-icons/si"
import Tooltip from "./Tooltip"

export default function Footer() {
  return (
    <div className=" flex h-1/5 flex-col gap-4 overflow-hidden pb-32 max-[800px]:pb-20">
      <p className=" font-semibold sm:ml-32">My skills:</p>
      <div className=" flex flex-row flex-wrap justify-center gap-5">
        <Tooltip message="TypeScript">
          <BiLogoTypescript size="2em" />
        </Tooltip>
        <Tooltip message="JavaScript">
          <BiLogoJavascript size="2em" />
        </Tooltip>
        <Tooltip message="NodeJS">
          <BiLogoNodejs size="2em" />
        </Tooltip>
        <Tooltip message="ExpressJS">
          <SiExpress size="2em" />
        </Tooltip>
        <Tooltip message="React/React Native">
          <BiLogoReact size="2em" />
        </Tooltip>
        <Tooltip message="PostgreSQL">
          <BiLogoPostgresql size="2em" />
        </Tooltip>
        <Tooltip message="TailwindCSS">
          <BiLogoTailwindCss size="2em" />
        </Tooltip>
        <Tooltip message="HTML5">
          <BiLogoHtml5 size="2em" />
        </Tooltip>
        <Tooltip message="CSS3">
          <BiLogoCss3 size="2em" />
        </Tooltip>
        <Tooltip message="Prisma">
          <SiPrisma size="2em" />
        </Tooltip>
        <Tooltip message="Figma">
          <BiLogoFigma size="2em" />
        </Tooltip>
        <Tooltip message="Git">
          <BiLogoGit size="2em" />
        </Tooltip>
        <Tooltip message="GitHub">
          <BiLogoGithub size="2em" />
        </Tooltip>
        <Tooltip message="Linux">
          <SiLinux size="2em" />
        </Tooltip>
      </div>
    </div>
  )
}
