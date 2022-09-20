import type { SVGProps } from "react";

export type SvgIconProps = ({ width: string | number } & Omit<SVGProps<SVGSVGElement>, 'width'>) | ({ height: string | number } & Omit<SVGProps<SVGSVGElement>, 'height'>)
