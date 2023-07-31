import newHomeShowcase from "../images/newHomeShowcase.png"
import nh_logo from "../images/nh_logo.svg"
import { SiTypescript, SiReact, SiTailwindcss, SiUndertale } from "react-icons/si/index.js"
import Tooltip from "../components/Tooltip"

export default function NewHomeShowcase() {
  return (
    <div className=" left-0 top-0 flex max-h-[100vh] max-w-[1800px] flex-1 flex-row justify-between gap-12 p-12">
      <div className=" h-100% bg-transparent flex w-8/12 flex-row flex-wrap items-center justify-around rounded-3xl">
        <img
          src={newHomeShowcase}
          className="h-auto max-w-[100%] object-contain drop-shadow-lg duration-200 ease-in hover:z-30 hover:scale-150"></img>
      </div>
      <div className="w-100% flex w-4/12 flex-col items-center justify-between gap-12">
        <img src={nh_logo} className=" w-full rounded-3xl"></img>
        <div className=" w-100% flex flex-grow flex-col justify-around rounded-3xl bg-nh-grey-light bg-opacity-80 p-6">
          <div>
            <h1 className=" pb-6 text-center text-xl font-semibold">Productivity focused Chromium extension</h1>
            <p className=" text-base">
              Chromium extension replacing default new tab with custom productivity focused home.
            </p>
          </div>
          <div>
            <h1 className=" text-xl font-semibold">Features:</h1>
            <ul className=" text-base">
              <li>- habit trackking</li>
              <li>- task tracing</li>
              <li>- Spotify API integration - currently playing track</li>
              <li>- Google Calendar API integration - current task</li>
              <li>- daily stoic quote from stoic quotes API</li>
              <li>- website shortcuts</li>
              <li>- daily browsing time state</li>
            </ul>
          </div>
        </div>
        <div className=" flex w-full flex-col gap-3 rounded-3xl bg-nh-grey-light bg-opacity-80 p-6">
          <h1 className=" font-semibold">Tech used:</h1>
          <div className=" flex flex-grow flex-row flex-wrap items-center justify-center gap-3 sm:gap-3">
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
