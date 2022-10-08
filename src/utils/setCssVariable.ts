export const setCssVariable = ({ name, value }: { name: string; value: string | number }) => {
  const prefix = name.substring(0, 2)

  if (prefix !== '--') {
    throw new Error('CSS variable must begin with a "--"')
  }

  document.documentElement.style.setProperty(name, `${value}`)
}
