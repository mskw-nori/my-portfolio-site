import { renderHook } from '@testing-library/react'

import { THEME_VARIABLES } from '@/constants/themeVariables'
import { useSetThemeVariablesToCssVariables } from '@/hooks/useSetThemeVariablesToCssVariables'

describe(useSetThemeVariablesToCssVariables.name, () => {
  let documentStyle: CSSStyleDeclaration

  beforeEach(() => {
    renderHook(() => useSetThemeVariablesToCssVariables())
    documentStyle = getComputedStyle(document.documentElement)
  })

  it('should set color variables', () => {
    expect(documentStyle.getPropertyValue('--primary-main')).toEqual(THEME_VARIABLES.colors.primary.main)
    expect(documentStyle.getPropertyValue('--secondary-light')).toEqual(THEME_VARIABLES.colors.secondary.light)
  })

  it('should set breakpoint variables', () => {
    expect(documentStyle.getPropertyValue('--breakpoint-sm')).toEqual(`${THEME_VARIABLES.breakpoints.sm}px`)
    expect(documentStyle.getPropertyValue('--breakpoint-md')).toEqual(`${THEME_VARIABLES.breakpoints.md}px`)
  })
})
