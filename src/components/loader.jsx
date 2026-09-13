export default function Loader() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex flex-col items-center justify-center gap-4 py-24"
    >
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200" />
      <p className="text-sm text-muted">Loading technologies…</p>
    </div>
  )
}
