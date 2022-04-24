import { DesktopDashboardLayout, SideNav, DashboardLayoutSlotsProvider } from 'features/dashboard'
import React, { ReactNode } from 'react'
import { dashboardSections } from '../DashboardSections'

interface DashboardLayoutProps {
  sideNav?: ReactNode
  children: ReactNode
}

function DashboardLayout(props: DashboardLayoutProps) {
  // TODO: Add Controls / bottomNav / other sections
  // TODO: Use Responsive Layout in layout
  const sideNav = <SideNav url="/dashboard" sections={dashboardSections} displayType="desktop" />

  const layout = (
    <DesktopDashboardLayout sideNav={props.sideNav ?? sideNav}>{props.children}</DesktopDashboardLayout>
  )

  return <DashboardLayoutSlotsProvider sideNav={sideNav}>{layout}</DashboardLayoutSlotsProvider>
}

const MemoizedDashboardLayout = React.memo(DashboardLayout)

export { MemoizedDashboardLayout as DashboardLayout }
