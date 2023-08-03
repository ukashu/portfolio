export default function Main() {
  function scrolll(id: string) {
    document.querySelector(`#${id}`)!.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main className=" flex h-3/5 flex-grow flex-col items-center justify-around px-6 sm:flex-row">
      <div className=" text-center">
        <h1 className="mb-1 text-6xl font-bold">John Doe</h1>
        <p>front-end web developer</p>
      </div>
      <div className=" z-10">
        <p className="mb-2 text-center text-3xl font-semibold">My projects</p>
        <ul className=" list-disc text-left text-lg">
          <li>
            <button className="underline" onClick={() => scrolll("gt")}>
              goodteacher mobile app
            </button>
          </li>
          <li>
            <button className="underline" onClick={() => scrolll("nh")}>
              NewHome chromium extension
            </button>
          </li>
          <li className="underline">ecommerce website</li>
        </ul>
      </div>
    </main>
  )
}
