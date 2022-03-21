import React, { Ref, ReactNode } from 'react'
import { BaseButtonProps } from '../BaseButton'
import { ButtonVariant, ButtonSize, ButtonColor } from './ButtonTypes'
import * as S from './Button.styles'

interface ButtonProps extends Omit<BaseButtonProps, 'ref'> {
  variant?: ButtonVariant
  color?: ButtonColor
  size?: ButtonSize
  startIcon?: ReactNode
  loading?: boolean
}

const Button = function (props: ButtonProps, ref: Ref<HTMLButtonElement>) {
  const {
    variant = 'solid',
    color = 'primary',
    size = 'medium',
    loading = false,
    children,
    disabled = false,
    ...others
  } = props

  const spinner = loading && (
    <S.SpinnerWrapper>
      <S.Spinner />
    </S.SpinnerWrapper>
  )

  const startIcon = props.startIcon && (
    <S.StartIconWrapper spinnerVisible={loading} iconOnly={!children}>
      {props.startIcon}
    </S.StartIconWrapper>
  )

  const label = <S.Label spinnerVisible={loading}>{children}</S.Label>

  return (
    <S.Button
      variant={variant}
      color={color}
      size={size}
      disabled={loading || disabled}
      {...others}
      ref={ref}>
      {spinner}
      {startIcon}
      {label}
    </S.Button>
  )
}

const forwardRefButton = React.forwardRef(Button)

export { forwardRefButton as Button }
export type { ButtonProps }
