export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-slate-700 border-t-cyan-500 animate-spin"></div>
        </div>
        <p className="text-white font-semibold">Loading...</p>
      </div>
    </div>
  )
}
