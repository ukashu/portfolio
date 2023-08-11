import register from "../images/register.jpg"
import classes from "../images/classes.jpg"
import students from "../images/students.jpg"
import drawer from "../images/drawer.jpg"
import tasks from "../images/tasks.jpg"
import gt_logo from "../images/gt_logo.svg"
import {
  SiExpress,
  SiPrisma,
  SiTypescript,
  SiNodedotjs,
  SiReact,
  SiPostgresql,
  SiTailwindcss,
  SiExpo,
  SiI18Next,
  SiGithub
} from "react-icons/si/index.js"
import Tooltip from "../components/Tooltip"
import "../i18n/config"
import { useTranslation } from "react-i18next"

export default function GoodTeacherShowcase() {
  const { t } = useTranslation()

  return (
    <div className="left-0 top-0 flex min-h-[95vh] flex-1 flex-col justify-between gap-1 p-1 text-gt-blue-dark max-lg:pb-10 md:flex-row lg:gap-10 lg:p-10">
      <div className="w-100% flex max-h-[90vh] flex-row flex-wrap items-center justify-around rounded-xl bg-opacity-40 md:w-8/12 lg:gap-x-20 lg:rounded-3xl">
        <img
          src={register}
          className="w-auto object-contain drop-shadow-lg duration-100 ease-in hover:z-30 hover:scale-150 max-md:max-w-[10%] md:max-h-[40%] md:rounded-xl"></img>
        <img
          src={classes}
          className="w-auto object-contain drop-shadow-lg duration-100 ease-in hover:z-30 hover:scale-150 max-md:max-w-[10%] md:max-h-[40%] md:rounded-xl"></img>
        <img
          src={students}
          className="w-auto object-contain drop-shadow-lg duration-100 ease-in hover:z-30 hover:scale-150 max-md:max-w-[10%] md:max-h-[40%] md:rounded-xl"></img>
        <img
          src={drawer}
          className="w-auto object-contain drop-shadow-lg duration-100 ease-in hover:z-30 hover:scale-150 max-md:max-w-[10%] md:max-h-[40%] md:rounded-xl"></img>
        <img
          src={tasks}
          className="w-auto object-contain drop-shadow-lg duration-100 ease-in hover:z-30 hover:scale-150 max-md:max-w-[10%] md:max-h-[40%] md:rounded-xl"></img>
      </div>
      <div className="w-100% flex flex-col justify-between gap-12 rounded-xl md:w-4/12 lg:rounded-3xl">
        <img src={gt_logo} className=" w-full rounded-xl lg:rounded-3xl"></img>
        <div className=" w-100% flex flex-grow flex-col justify-around rounded-xl bg-gt-blue-light bg-opacity-80 p-2 lg:rounded-3xl lg:p-6">
          <div>
            <h1 className=" pb-6 text-center text-xl font-semibold">{t("gt.title")}</h1>
            <p className=" text-base">
              {t("gt.description.1")}{" "}
              <strong className=" text-gt-red-light">
                <strong className=" text-gt-red-light">good</strong>teacher
              </strong>{" "}
              {t("gt.description.2")}
            </p>
          </div>
          <div>
            <h1 className=" text-xl font-semibold">{t("gt.features.title")}</h1>
            <ul className=" text-base">
              <li>- {t("gt.features.1")}</li>
              <li>- {t("gt.features.2")}</li>
              <li>- {t("gt.features.3")}</li>
              <li>- {t("gt.features.4")}</li>
              <li>- {t("gt.features.5")}</li>
              <li>- {t("gt.features.6")}</li>
              <li>- {t("gt.features.7")}</li>
            </ul>
          </div>
          <Tooltip message="Check out the project repository on GitHub!">
            <SiGithub size="2em" />
          </Tooltip>
        </div>
        <div className=" w-100% flex flex-col gap-3 rounded-xl bg-gt-blue-light bg-opacity-80 p-2 lg:rounded-3xl lg:p-6">
          <h1 className=" font-semibold">{t("builtWith")}</h1>
          <div className=" flex flex-grow flex-row flex-wrap items-center justify-center gap-3">
            <Tooltip message="TypeScript">
              <SiTypescript size="2em" />
            </Tooltip>
            <Tooltip message="NodeJS">
              <SiNodedotjs size="2em" />
            </Tooltip>
            <Tooltip message="ExpressJS">
              <SiExpress size="2em" />
            </Tooltip>
            <Tooltip message="React Native">
              <SiReact size="2em" />
            </Tooltip>
            <Tooltip message="Expo">
              <SiExpo size="2em" />
            </Tooltip>
            <Tooltip message="PostgreSQL">
              <SiPostgresql size="2em" />
            </Tooltip>
            <Tooltip message="Prisma">
              <SiPrisma size="2em" />
            </Tooltip>
            <Tooltip message="Tailwind">
              <SiTailwindcss size="2em" />
            </Tooltip>
            <Tooltip message="i18n">
              <SiI18Next size="2em" />
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  )
}
