import { useState, useEffect } from 'react'
import Header from './components/Header'
import CategoryNav from './components/CategoryNav'
import SkillCard from './components/SkillCard'
import InstallBanner from './components/InstallBanner'

function App() {
  const [skills, setSkills] = useState([])
  const [activeCategory, setActiveCategory] = useState('All')
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch(import.meta.env.BASE_URL + 'registry.json')
      .then((r) => r.json())
      .then((data) => setSkills(data.skills || []))
  }, [])

  const categories = [...new Set(skills.map((s) => s.category))].sort(
    (a, b) => {
      const orderA = skills.find((s) => s.category === a)?.categoryOrder ?? 99
      const orderB = skills.find((s) => s.category === b)?.categoryOrder ?? 99
      return orderA - orderB
    }
  )

  const filtered = skills.filter((s) => {
    const matchesCategory = activeCategory === 'All' || s.category === activeCategory
    const matchesSearch =
      !search ||
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.description.toLowerCase().includes(search.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const grouped = categories
    .filter((c) => activeCategory === 'All' || c === activeCategory)
    .map((c) => ({
      category: c,
      skills: filtered.filter((s) => s.category === c),
    }))
    .filter((g) => g.skills.length > 0)

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <Header />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        <InstallBanner />
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <input
            type="text"
            placeholder="Search skills..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 bg-gray-900 border border-gray-800 rounded-lg px-4 py-2.5 text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:border-violet-500 transition-colors"
          />
        </div>
        <CategoryNav
          categories={categories}
          active={activeCategory}
          onSelect={setActiveCategory}
          skills={skills}
        />
        {grouped.map((g) => (
          <section key={g.category} className="mb-12">
            <h2 className="text-lg font-semibold text-gray-200 mb-4 flex items-center gap-2">
              {g.category}
              <span className="text-xs font-normal text-gray-500 bg-gray-800 px-2 py-0.5 rounded-full">
                {g.skills.length}
              </span>
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {g.skills.map((s) => (
                <SkillCard key={s.id} skill={s} />
              ))}
            </div>
          </section>
        ))}
        {filtered.length === 0 && (
          <p className="text-gray-500 text-center py-12">No skills match your search.</p>
        )}
      </main>
    </div>
  )
}

export default App
