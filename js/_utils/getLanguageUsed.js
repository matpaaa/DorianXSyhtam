

/**
 * Return language used
 * @returns {'en' | 'fr'}
 */
export default function getLanguageUsed() {
    const pathSegment = window.location.pathname.split('/')[1]
    return pathSegment === 'en' ? 'en' : 'fr'
}