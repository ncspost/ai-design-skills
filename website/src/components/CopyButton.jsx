import { useState } from 'react'

export default function CopyButton({ text }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleCopy}
      className="shrink-0 px-3 py-2 rounded-lg text-xs font-medium transition-colors bg-violet-600 hover:bg-violet-500 text-white"
    >
      {copied ? 'Copied!' : 'Copy'}
    </button>
  )
}
