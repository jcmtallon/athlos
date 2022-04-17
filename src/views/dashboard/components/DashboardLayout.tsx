import { DesktopDashboardLayout, SideNav } from 'features/dashboard'
import React, { ReactNode } from 'react'
import { dashboardSections } from '../DashboardSections'

interface DashboardLayoutProps {
  sideNav?: ReactNode
  children: ReactNode
}

function DashboardLayout(props: DashboardLayoutProps) {
  // TODO: Add Controls / bottomNav / other sections
  // TODO: Use Responsive Layout in layout
  // TODO: include useContextProvider??
  const sideNav = <SideNav url="/dashboard" sections={dashboardSections} displayType="desktop" />

  const layout = (
    <DesktopDashboardLayout sideNav={props.sideNav ?? sideNav}>{props.children}</DesktopDashboardLayout>
  )

  return layout
}

const MemoizedDashboardLayout = React.memo(DashboardLayout)

export { MemoizedDashboardLayout as DashboardLayout }
