import CopyButton from './CopyButton'

const INSTALL_ALL_CMD = './scripts/install.sh --all'

export default function InstallBanner() {
  return (
    <div className="my-8 bg-gradient-to-r from-violet-600/10 to-fuchsia-600/10 border border-violet-500/20 rounded-xl p-6">
      <h2 className="text-base font-semibold text-white mb-1">
        Install all 48 skills
      </h2>
      <p className="text-sm text-gray-400 mb-4">
        Clone the repo and run the install script to add every skill to your
        Claude skills directory.
      </p>
      <div className="flex items-center gap-2">
        <code className="flex-1 text-sm bg-gray-950 text-gray-300 px-4 py-2.5 rounded-lg border border-gray-800 truncate">
          git clone https://github.com/nkkko/ai-design-skills.git && cd ai-design-skills && {INSTALL_ALL_CMD}
        </code>
        <CopyButton
          text={`git clone https://github.com/nkkko/ai-design-skills.git && cd ai-design-skills && ${INSTALL_ALL_CMD}`}
        />
      </div>
    </div>
  )
}
