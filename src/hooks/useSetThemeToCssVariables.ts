import { useEffect } from 'react'

import { THEME } from '@/constants/theme'

export const useSetThemeToCssVariables = () => {
  useEffect(() => {
    const { colors, breakpoints } = THEME

    const convertedColors = Object.entries(colors).flatMap(([category, values]) => Object.entries(values).map(([name, value]) => [`--${category}-${name}`, value]))
    const convertedBreakpoints = Object.entries(breakpoints).map(([name, value]) => [`--breakpoint-${name}`, `${value}px`])

    // NOTE: valueが [CSS変数名, 値] になるようにする
    const convertedThemeVariables = [...convertedColors, ...convertedBreakpoints]

    convertedThemeVariables.forEach(([name, value]) => {
      document.documentElement.style.setProperty(name, value)
    })
  }, [])
}
