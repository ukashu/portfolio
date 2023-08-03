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

export default function GoodTeacherShowcase() {
  return (
    <div className="left-0 top-0 flex min-h-[95vh] flex-1 flex-col justify-between gap-1 p-1 text-gt-blue-dark max-md:pb-10 md:flex-row md:gap-10 md:p-10">
      <div className="w-100% flex max-h-[90vh] flex-row flex-wrap items-center justify-around rounded-3xl bg-opacity-40 md:w-8/12 md:gap-x-20">
        <img
          src={register}
          className="w-auto object-contain drop-shadow-lg duration-200 ease-in hover:z-30 hover:scale-150 max-md:max-w-[10%] md:max-h-[40%] md:rounded-xl"></img>
        <img
          src={classes}
          className="w-auto object-contain drop-shadow-lg duration-200 ease-in hover:z-30 hover:scale-150 max-md:max-w-[10%] md:max-h-[40%] md:rounded-xl"></img>
        <img
          src={students}
          className="w-auto object-contain drop-shadow-lg duration-200 ease-in hover:z-30 hover:scale-150 max-md:max-w-[10%] md:max-h-[40%] md:rounded-xl"></img>
        <img
          src={drawer}
          className="w-auto object-contain drop-shadow-lg duration-200 ease-in hover:z-30 hover:scale-150 max-md:max-w-[10%] md:max-h-[40%] md:rounded-xl"></img>
        <img
          src={tasks}
          className="w-auto object-contain drop-shadow-lg duration-200 ease-in hover:z-30 hover:scale-150 max-md:max-w-[10%] md:max-h-[40%] md:rounded-xl"></img>
      </div>
      <div className="w-100% flex flex-col justify-between gap-12 rounded-3xl md:w-4/12">
        <img src={gt_logo} className=" w-full rounded-3xl"></img>
        <div className=" w-100% flex flex-grow flex-col justify-around rounded-3xl bg-gt-blue-light bg-opacity-80 p-2 md:p-6">
          <div>
            <h1 className=" pb-6 text-center text-xl font-semibold">Online student notebook replacement.</h1>
            <p className=" text-base">
              Mobile app{" "}
              <strong className=" text-gt-red-light">
                <strong className=" text-gt-red-light">good</strong>teacher
              </strong>{" "}
              is an online replacement for a student notebook. It's made for teachers and students, primarily with music
              schools in mind, but it can be used in any field. Teachers can create classes, add students to them and
              send out tasks for students. The students can join classes and manage their tasks - complete or add more
              of them. It is a mobile application written in React Native with a Node.js server and a database.
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
          <Tooltip message="Check out the project repository on GitHub!">
            <SiGithub size="2em" />
          </Tooltip>
        </div>
        <div className=" w-100% flex flex-col gap-3 rounded-3xl bg-gt-blue-light bg-opacity-80 p-2 md:p-6">
          <h1 className=" font-semibold">Tech used:</h1>
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
