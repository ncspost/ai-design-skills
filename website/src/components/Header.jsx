export default function Header() {
  return (
    <header className="border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-white tracking-tight">
            AI Design Skills
          </h1>
          <p className="text-sm text-gray-400 mt-0.5">
            48 skills across 8 categories for Claude-powered design workflows
          </p>
        </div>
        <a
          href="https://github.com/ncspost/ai-design-skills"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-400 hover:text-white transition-colors hidden sm:block"
        >
          GitHub
        </a>
      </div>
    </header>
  )
}
