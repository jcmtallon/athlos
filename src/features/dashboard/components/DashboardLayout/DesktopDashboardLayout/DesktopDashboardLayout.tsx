import React, { ReactNode } from 'react'
import * as S from './DesktopDashboardLayout.styles'
import { useCollapsibleSideNav } from './useCollapsibleSideNav'
import { useDashboardLayoutSlots } from '../../DashboardLayoutSlotsProvider'

interface DesktopDashboardLayoutProps {
  sideNav?: ReactNode
  children?: ReactNode
}

function DesktopDashboardLayout(props: DesktopDashboardLayoutProps) {
  const { sideNav, children, ...otherProps } = props

  const slots = useDashboardLayoutSlots()
  const sideNavProps = useCollapsibleSideNav()

  console.log('sideNav', sideNav)
  console.log('navProps', slots.sideNav)

  return (
    <S.Layout {...otherProps}>
      <S.SideNav {...sideNavProps}>{sideNav ?? slots.sideNav}</S.SideNav>
      <S.Content>{children}</S.Content>
    </S.Layout>
  )
}

export { DesktopDashboardLayout }
export type { DesktopDashboardLayoutProps }
