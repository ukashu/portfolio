export default function Tooltip({ message, children }: { message: string; children: React.ReactNode }) {
  return (
    <div className="text group relative flex">
      {children}
      <span className="text-white absolute left-0 top-10 z-[1000] scale-0 rounded p-2 text-center text-xs backdrop-blur transition-all group-hover:scale-100">
        {message}
      </span>
    </div>
  )
}
