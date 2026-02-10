export default function CategoryNav({ categories, active, onSelect, skills }) {
  const counts = {}
  for (const s of skills) {
    counts[s.category] = (counts[s.category] || 0) + 1
  }

  return (
    <nav className="flex flex-wrap gap-2 mb-8">
      <button
        onClick={() => onSelect('All')}
        className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
          active === 'All'
            ? 'bg-violet-600 text-white'
            : 'bg-gray-800 text-gray-400 hover:text-gray-200 hover:bg-gray-700'
        }`}
      >
        All ({skills.length})
      </button>
      {categories.map((c) => (
        <button
          key={c}
          onClick={() => onSelect(c)}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
            active === c
              ? 'bg-violet-600 text-white'
              : 'bg-gray-800 text-gray-400 hover:text-gray-200 hover:bg-gray-700'
          }`}
        >
          {c} ({counts[c] || 0})
        </button>
      ))}
    </nav>
  )
}
