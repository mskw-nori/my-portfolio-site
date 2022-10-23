import 'reset-css'
import '@fontsource/new-tegomin'

import '@/styles/globals.css'

import * as nextImage from 'next/image'
import { useSetThemeToCssVariables } from '@/hooks/useSetThemeToCssVariables'
import { RouterContext } from 'next/dist/shared/lib/router-context'

import type { DecoratorFn } from '@storybook/react'
import type { ClassAttributes, ImgHTMLAttributes } from 'react'

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLImageElement> & ImgHTMLAttributes<HTMLImageElement>) => <img {...props} />
})

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider
  }
}

const withCssVariables: DecoratorFn = Story => {
  useSetThemeToCssVariables()

  return <Story />
}

export const decorators = [withCssVariables]
