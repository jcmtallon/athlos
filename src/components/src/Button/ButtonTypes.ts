import { css } from 'styled-components'

type Css = ReturnType<typeof css>

type ButtonVariant = 'solid' | 'outline' | 'ghost'
type ButtonSize = 'small' | 'medium'
type ButtonColor = 'neutral' | 'primary' | 'danger'

export type { ButtonVariant, ButtonSize, Css, ButtonColor }
