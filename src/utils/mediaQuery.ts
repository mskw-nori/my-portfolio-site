import { THEME } from '@/constants/theme'

export const isSmartphone = typeof window !== 'undefined' && window.matchMedia(`(max-width: ${THEME.breakpoints.sm}px)`).matches
