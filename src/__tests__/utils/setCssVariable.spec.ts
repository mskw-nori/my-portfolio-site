import { setCssVariable } from '@/utils/setCssVariable'

describe(setCssVariable.name, () => {
  it('should set css variable', () => {
    const targetProperty = {
      name: '--primary-main',
      value: '#2196f3'
    }

    setCssVariable(targetProperty)
    expect(getComputedStyle(document.documentElement).getPropertyValue(targetProperty.name)).toEqual(targetProperty.value)
  })

  it('should throw error because of validation error', () => {
    expect(() =>
      setCssVariable({
        name: 'primary-main',
        value: '#2196f3'
      })
    ).toThrow(/^CSS variable must begin with a "--"$/)
  })
})
