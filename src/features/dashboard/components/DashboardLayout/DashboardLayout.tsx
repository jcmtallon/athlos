import React, { ReactNode } from 'react'
import { DesktopDashboardLayout } from './DesktopDashboardLayout'

interface DashboardLayoutProps {
  sideNav?: ReactNode
  children: ReactNode
}

function DashboardLayout(props: DashboardLayoutProps) {
  // TODO: Add Controls / bottomNav / other sections
  // TODO: Use Responsive Layout in layout
  // TODO: include useContextProvider??

  const layout = <DesktopDashboardLayout sideNav={props.sideNav}>{props.children}</DesktopDashboardLayout>

  return layout
}

const MemoizedDashboardLayout = React.memo(DashboardLayout)

export { MemoizedDashboardLayout as DashboardLayout }
