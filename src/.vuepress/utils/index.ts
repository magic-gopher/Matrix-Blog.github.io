import { BaseURI } from './constant.js'

export const withBase = (path: string) => {
    if (!path) return ''
    const base = BaseURI
    if (base && path.charAt(0) === '/') {
        return base + path.slice(1)
    } else {
        return path
    }
}