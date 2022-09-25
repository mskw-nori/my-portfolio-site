import { renderHook } from '@testing-library/react'

import { THEME } from '@/constants/theme'
import { useSetThemeToCssVariables } from '@/hooks/useSetThemeToCssVariables'

describe(useSetThemeToCssVariables.name, () => {
  let documentStyle: CSSStyleDeclaration

  beforeEach(() => {
    renderHook(() => useSetThemeToCssVariables())
    documentStyle = getComputedStyle(document.documentElement)
  })

  it('should set color variables', () => {
    expect(documentStyle.getPropertyValue('--primary-main')).toEqual(THEME.colors.primary.main)
    expect(documentStyle.getPropertyValue('--secondary-light')).toEqual(THEME.colors.secondary.light)
  })

  it('should set breakpoint variables', () => {
    expect(documentStyle.getPropertyValue('--breakpoint-sm')).toEqual(`${THEME.breakpoints.sm}px`)
    expect(documentStyle.getPropertyValue('--breakpoint-md')).toEqual(`${THEME.breakpoints.md}px`)
  })
})
