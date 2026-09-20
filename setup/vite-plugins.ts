import { defineVitePluginsSetup } from '@slidev/types'

export default defineVitePluginsSetup(() => [{
  name: 'audience-pages-preserve-slide',
  enforce: 'pre',
  transform(code, id) {
    if (!id.replaceAll('\\', '/').split('?')[0].endsWith('/@slidev/client/setup/root.ts'))
      return

    // Slidev 52.16 sends slide 1 from custom routes. Match its receive-side guard
    // so /live and /sources cannot reset either server or BroadcastChannel sync.
    const marker = 'function updateSharedState() {'
    if (!code.includes(marker))
      this.error('Slidev navigation sync changed. Review the audience-page guard in setup/vite-plugins.ts.')

    return {
      code: code.replace(marker, `${marker}\n    if (!hasPrimarySlide.value)\n      return\n`),
      map: null,
    }
  },
}])
