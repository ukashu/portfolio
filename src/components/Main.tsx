import "../i18n/config"
import { useTranslation } from "react-i18next"

export default function Main() {
  const { t } = useTranslation()

  function scrolll(id: string) {
    document.querySelector(`#${id}`)!.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main className=" flex h-3/5 flex-grow flex-col items-center justify-around px-6 sm:flex-row">
      <div className=" text-center">
        <h1 className="mb-1 text-6xl font-bold">John Doe</h1>
        <p>{t("landing.title")}</p>
      </div>
      <div className=" z-10">
        <p className="mb-2 text-center text-3xl font-semibold">{t("landing.myProjects.title")}</p>
        <ul className=" list-disc text-left text-lg">
          <li>
            <button className="underline" onClick={() => scrolll("gt")}>
              {t("landing.myProjects.gt")}
            </button>
          </li>
          <li>
            <button className="underline" onClick={() => scrolll("nh")}>
              {t("landing.myProjects.nh")}
            </button>
          </li>
          <li className="underline">{t("landing.myProjects.3")}</li>
        </ul>
      </div>
    </main>
  )
}
