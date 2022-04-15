import React, { ReactNode } from 'react'
import * as S from './DesktopDashboardLayout.styles'
import { useCollapsibleSideNav } from './useCollapsibleSideNav'

interface DesktopDashboardLayoutProps {
  sideNav?: ReactNode
  children?: ReactNode
}

function DesktopDashboardLayout(props: DesktopDashboardLayoutProps) {
  const { sideNav, children, ...otherProps } = props
  const sideNavProps = useCollapsibleSideNav()

  return (
    <S.Layout {...otherProps}>
      <S.SideNav {...sideNavProps}>{sideNav ?? 'SIDE-NAV-MENU'}</S.SideNav>
      <S.Content>{children}</S.Content>
    </S.Layout>
  )
}

export { DesktopDashboardLayout }
export type { DesktopDashboardLayoutProps }
