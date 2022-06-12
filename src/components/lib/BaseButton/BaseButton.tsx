import React, { DetailedHTMLProps, ButtonHTMLAttributes, Ref } from 'react'
import * as S from './BaseButton.styles'

type BaseButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

/**
 * Contains as few styles as possible.
 * It aims to be a simple building block for creating other buttons.
 */
function BaseButton(props: BaseButtonProps, ref: Ref<HTMLButtonElement>) {
  const { children, ...otherProps } = props

  return (
    <S.Button type="button" {...otherProps} ref={ref}>
      {children}
    </S.Button>
  )
}

const forwardRefBaseButton = React.forwardRef(BaseButton)

export { forwardRefBaseButton as BaseButton }
export type { BaseButtonProps }
