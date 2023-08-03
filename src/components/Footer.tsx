import {
  SiExpress,
  SiPrisma,
  SiLinux,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiGit,
  SiGithub,
  SiFigma,
  SiPostgresql,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiGooglechrome
} from "react-icons/si/index.js"

import Tooltip from "./Tooltip"

export default function Footer() {
  return (
    <div className=" flex h-1/5 flex-col gap-4 overflow-hidden pb-28 max-[800px]:pb-20">
      <p className=" font-semibold sm:ml-32">My skills:</p>
      <div className=" flex flex-row flex-wrap justify-center gap-3 sm:gap-5">
        <Tooltip message="TypeScript">
          <SiTypescript size="2em" />
        </Tooltip>
        <Tooltip message="JavaScript">
          <SiJavascript size="2em" />
        </Tooltip>
        <Tooltip message="NodeJS">
          <SiNodedotjs size="2em" />
        </Tooltip>
        <Tooltip message="ExpressJS">
          <SiExpress size="2em" />
        </Tooltip>
        <Tooltip message="React/React Native">
          <SiReact size="2em" />
        </Tooltip>
        <Tooltip message="PostgreSQL">
          <SiPostgresql size="2em" />
        </Tooltip>
        <Tooltip message="TailwindCSS">
          <SiTailwindcss size="2em" />
        </Tooltip>
        <Tooltip message="HTML5">
          <SiHtml5 size="2em" />
        </Tooltip>
        <Tooltip message="CSS3">
          <SiCss3 size="2em" />
        </Tooltip>
        <Tooltip message="Prisma">
          <SiPrisma size="2em" />
        </Tooltip>
        <Tooltip message="Figma">
          <SiFigma size="2em" />
        </Tooltip>
        <Tooltip message="Git">
          <SiGit size="2em" />
        </Tooltip>
        <Tooltip message="GitHub">
          <SiGithub size="2em" />
        </Tooltip>
        <Tooltip message="Linux">
          <SiLinux size="2em" />
        </Tooltip>
        <Tooltip message="Chromium extensions">
          <SiGooglechrome size="2em" />
        </Tooltip>
      </div>
    </div>
  )
}
