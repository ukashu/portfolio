export default function Tooltip({ message, children }: { message: string; children: React.ReactNode }) {
  return (
    <div className="group relative flex text-center">
      {children}
      <span className="absolute left-0 top-10 z-[1000] scale-0 rounded p-2 text-xs text-white backdrop-blur transition-all group-hover:scale-100">
        {message}
      </span>
    </div>
  )
}
