import type { SvgIconProps } from '@/types/svg'
import type { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
} & SvgIconProps

export const MySvg: FC<Props> = ({ children, ...svgIconProps }) => (
  <svg style={{ verticalAlign: 'text-bottom' }} {...svgIconProps}>
    {children}
  </svg>
)
