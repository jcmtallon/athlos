import React, { ReactNode } from 'react'
import { Portal } from '../Portal/Portal'

interface SlidePanelProps {
  className?: string
  children?: ReactNode
}

function SlidePanel(props: SlidePanelProps) {
  const { children, ...otherProps } = props

  return (
    <Portal id="slide-panel">
      <div {...otherProps}>
        <div>Backdrop</div>
        <div>{children}</div>
      </div>
    </Portal>
  )
}

export { SlidePanel }
