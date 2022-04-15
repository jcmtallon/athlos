import React, { ReactNode } from 'react'
import { DesktopDashboardLayout } from './DesktopDashboardLayout'

interface DashboardLayoutProps {
  sideNav?: ReactNode
  children: ReactNode
}

function DashboardLayout(props: DashboardLayoutProps) {
  // TODO: Add Controls / bottomNav / other sections

  // TODO: Use Responsive Layout in layout
  //   const layout = (
  //     <ResponsiveLayout
  //       renderDesktop={() => (
  //         <DesktopDashboardLayout>
  //
  //           {children}
  //         </DesktopDashboardLayout>
  //       )}
  //       renderMobile={() => (
  //         <>
  //
  //           {children}
  //         </>
  //       )}
  //     />
  //   )

  const layout = <DesktopDashboardLayout sideNav={props.sideNav}>{props.children}</DesktopDashboardLayout>

  //   TODO: include useContextProvider??

  return layout
}

const MemoizedDashboardLayout = React.memo(DashboardLayout)

export { MemoizedDashboardLayout as DashboardLayout }
