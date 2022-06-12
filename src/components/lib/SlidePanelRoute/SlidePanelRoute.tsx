import React, { ReactNode } from 'react'
import { SlidePanel } from '../SlidePanel'

type SlidePanelRouteProps = {
  children?: ReactNode
}

function SlidePanelRoute(props: SlidePanelRouteProps) {
  const { children } = props

  return <SlidePanel>{children}</SlidePanel>
}

export { SlidePanelRoute }
export type { SlidePanelRouteProps }
