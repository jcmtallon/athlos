import React, { ReactNode, useCallback } from 'react'
import { Portal } from '../Portal/Portal'
import * as S from './SlidePanel.styles'

interface SlidePanelProps {
  className?: string
  children?: ReactNode

  onCloseRequest?: () => void
}

function SlidePanel(props: SlidePanelProps) {
  const { children, onCloseRequest, ...otherProps } = props

  const handleBackdropClick = useCallback(() => {
    onCloseRequest?.()
  }, [onCloseRequest])

  return (
    <Portal id="slide-panel">
      <S.Container {...otherProps}>
        <S.Backdrop onClick={handleBackdropClick} />
        <S.Panel>{children}</S.Panel>
      </S.Container>
    </Portal>
  )
}

export { SlidePanel }
