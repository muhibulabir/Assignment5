export default function TechCard({ tech, isAdded, onAdd }) {
  const { name, category, description, icon, rating, difficulty, badge } = tech

  const categoryClass = category ? `category-${String(category).toLowerCase().replace(/\s+/g, '-')}` : 'category-default'
  const difficultyClass = difficulty ? `difficulty-${String(difficulty).toLowerCase().replace(/\s+/g, '-')}` : 'difficulty-default'

  return (
    <article className="flex flex-col rounded-2xl border border-slate-100 bg-white p-5 shadow-card">
      <div className="flex items-start justify-between">
        <img
          src={icon}
          alt=""
          aria-hidden="true"
          className="h-9 w-9 object-contain"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
        />
        <span className={`category-chip ${categoryClass}`}>
          {badge}
        </span>
      </div>

      <h3 className="mt-4 text-lg font-bold text-ink">{name}</h3>
      <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted">{description}</p>

      <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs">
        <span className={`category-chip category-chip-small ${categoryClass}`}>
          {category}
        </span>
        <span className={`difficulty-badge ${difficultyClass}`}>{difficulty}</span>
        <span className="ml-auto flex items-center gap-1 font-semibold text-ink">
          <svg width="14" height="14" viewBox="0 0 20 20" fill="#F59E0B" aria-hidden="true">
            <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.4 6-5.5-3.2-5.5 3.2 1.4-6-4.6-4.1 6.1-.6L10 1.5z" />
          </svg>
          {rating}
        </span>
      </div>

      <button
        type="button"
        onClick={onAdd}
        disabled={isAdded}
        className={`mt-5 w-full rounded-lg py-2.5 text-sm font-semibold transition-colors ${
          isAdded
            ? 'cursor-not-allowed bg-emerald-50 text-emerald-600'
            : 'bg-ink text-white hover:bg-slate-800'
        }`}
      >
        {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
    </article>
  )
}
