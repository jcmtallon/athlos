import { FlattenTypography, flattenTypography } from './typography'

interface AthlosTheme {
  typography: FlattenTypography
}

const theme: AthlosTheme = {
  typography: flattenTypography,
}

export { theme }
export type { AthlosTheme }
