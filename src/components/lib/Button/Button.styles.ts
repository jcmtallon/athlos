import styled from 'styled-components'
// import { NewSpinner } from '../Spinner'
import { BaseButton } from '../BaseButton'
// import { getSizeStyles } from './ButtonSizeStyles'
import { ButtonVariant, ButtonSize, ButtonColor } from './ButtonTypes'
// import { getVariantStyles } from './ButtonVariantStyles'

// ${props => getVariantStyles(props.variant, props.color)};
// ${props => getSizeStyles(props.size)};

const Button = styled(BaseButton)<{
  color: ButtonColor
  size: ButtonSize
  variant: ButtonVariant
}>``

// const Spinner = styled(NewSpinner)``
const Spinner = styled.div``

const SpinnerWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`

const StartIconWrapper = styled.span<{ iconOnly: boolean; spinnerVisible: boolean }>`
  padding-right: ${props => (props.iconOnly ? '0px' : '8px')};
  // Used for maintaining the button width when displaying the loading spinner.
  visibility: ${props => (props.spinnerVisible ? 'hidden' : 'visible')};
`

const Label = styled.span<{ spinnerVisible: boolean }>`
  // Used for maintaining the button width when displaying the loading spinner.
  visibility: ${props => (props.spinnerVisible ? 'hidden' : 'visible')};
`

export { Button, Label, Spinner, SpinnerWrapper, StartIconWrapper }
