import { useState } from 'react'
import CopyButton from './CopyButton'

export default function SkillCard({ skill }) {
  const [expanded, setExpanded] = useState(false)
  const installCmd = `./scripts/install.sh ${skill.id}`

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 flex flex-col hover:border-gray-700 transition-colors">
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="font-semibold text-gray-100 text-sm leading-snug">
          {skill.name}
        </h3>
        <span className="shrink-0 text-[11px] text-gray-500 bg-gray-800 px-2 py-0.5 rounded-full">
          {skill.category}
        </span>
      </div>
      <p className="text-sm text-gray-400 leading-relaxed flex-1">
        {expanded ? skill.description : truncate(skill.description, 120)}
        {skill.description.length > 120 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-violet-400 hover:text-violet-300 ml-1 text-sm"
          >
            {expanded ? 'less' : 'more'}
          </button>
        )}
      </p>
      <div className="mt-4 flex items-center gap-2">
        <code className="flex-1 text-xs bg-gray-950 text-gray-400 px-3 py-2 rounded-lg truncate border border-gray-800">
          {installCmd}
        </code>
        <CopyButton text={installCmd} />
      </div>
    </div>
  )
}

function truncate(str, max) {
  if (str.length <= max) return str
  return str.slice(0, max).replace(/\s+\S*$/, '') + '...'
}
