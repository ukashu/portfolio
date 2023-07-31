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
  SiI18Next
} from "react-icons/si/index.js"
import Tooltip from "../components/Tooltip"

export default function GoodTeacherShowcase() {
  return (
    <div className=" left-0 top-0 flex max-h-[100vh] flex-1 flex-row justify-between gap-12 overflow-hidden p-12 text-gt-blue-dark">
      <div className=" h-100% flex w-8/12 flex-row flex-wrap items-center justify-around rounded-3xl bg-opacity-40 md:gap-x-20">
        <img src={register} className="max-h-[40%] w-auto object-contain drop-shadow-lg"></img>
        <img src={classes} className="max-h-[40%] w-auto object-contain drop-shadow-lg"></img>
        <img src={students} className="max-h-[40%] w-auto object-contain drop-shadow-lg"></img>
        <img src={drawer} className="max-h-[40%] w-auto object-contain drop-shadow-lg"></img>
        <img src={tasks} className="max-h-[40%] w-auto object-contain drop-shadow-lg"></img>
      </div>
      <div className="w-100% flex w-4/12 flex-col justify-between gap-12 rounded-3xl">
        <img src={gt_logo} className=" w-full rounded-3xl"></img>
        <div className=" w-100% flex flex-grow flex-col justify-around rounded-3xl bg-gt-blue-light bg-opacity-80 p-6">
          <div>
            <h1 className=" pb-6 text-center text-xl font-semibold">Online student notebook replacement.</h1>
            <p className=" text-base">
              Mobile app <strong className=" text-gt-red-light">goodteacher</strong> is an online replacement for a
              student notebook. It's made for teachers and students, primarily with music schools in mind, but it can be
              used in any field. Teachers can create classes, add students to them and send out tasks for students. The
              students can join classes and manage their tasks - complete or add more of them. It is a mobile
              application written in React Native with a Node.js server and a database.
            </p>
          </div>
          <div>
            <h1 className=" text-xl font-semibold">Features:</h1>
            <ul className=" text-base">
              <li>- teacher or student account type</li>
              <li>- account activation through email</li>
              <li>- remotely assigning tasks to students as a teacher</li>
              <li>- offline access to tasks</li>
              <li>- infrastructure designed with user data security in mind</li>
              <li>- fun randomly generated student avatars</li>
              <li>- two languages (PL, ENG)</li>
            </ul>
          </div>
        </div>
        <div className=" w-100% flex flex-col gap-3 rounded-3xl bg-gt-blue-light bg-opacity-80 p-6">
          <h1 className=" font-semibold">Tech used:</h1>
          <div className=" flex flex-grow flex-row flex-wrap items-center justify-center gap-3 sm:gap-3">
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
