function StackPanel({stack,onRemove,onRemoveAll}) 
{
  const count = stack.length
  return (
    <aside className="h-fit rounded-2xl border border-slate-100 bg-white p-5 shadow-card xl:sticky xl:top-24">
      <h2 className="text-lg font-bold text-ink">Your Stack</h2>
      {count === 0 ? (
        <>
          <p className="mt-1 text-sm text-muted">No technologies selected yet.</p>
          <div className="mt-4 rounded-xl border border-dashed border-slate-200 py-8 text-center text-sm text-slate-400">
            Your stack is empty.
          </div>
        </>
      ) : (
        <>
          <p className="mt-1 text-sm text-muted">
            {count} Technology Selected
          </p>

          <ul className="mt-4 flex flex-col gap-3">
            {stack.map((tech)=>(
              <li
                key={tech.id}
                className="flex items-center gap-3 rounded-xl border border-slate-100 px-3 py-2.5"
              >
                <img
                  src={tech.icon}
                  alt=""
                  aria-hidden="true"
                  className="h-8 w-8 flex-shrink-0 object-contain"
                  onError={(e)=>{
                    e.currentTarget.style.display = 'none'
                  }}
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-ink">{tech.name}</p>
                  <p className="text-xs text-muted">{tech.category}</p>
                </div>
                <button
                  type="button"
                  onClick={()=>onRemove(tech.id)}
                  aria-label={`Remove ${tech.name} from stack`}
                  className="flex-shrink-0 rounded-full p-1 text-slate-400 transition-colors hover:bg-slate-50 hover:text-slate-600"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </button>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={onRemoveAll}
            className="mt-4 w-full rounded-lg border border-rose-200 py-2.5 text-sm font-semibold text-rose-500 transition-colors hover:bg-rose-50"
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  )
}

export default StackPanel