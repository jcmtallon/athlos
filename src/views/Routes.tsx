import React from 'react'
import { Navigate, Route, Routes as RouterRoutes } from 'react-router-dom'
import { Dashboard } from './dashboard/Dashboard'

const DesignSystem = React.lazy(() => import('./designSystem').then(mod => ({ default: mod.DesignSystem })))

function Routes() {
  return (
    <RouterRoutes>
      <Route path="design-system" element={<DesignSystem />} />
      {/* TODO: A Route without path?? */}
      {/* TODO: AuthRouterProvider */}
      {/* TODO: Different Business Providers */}
      {/* TODO: The remaining two routes */}
      <Route path="dashboard/*" element={<Dashboard />} />
      <Route path="*" element={<Navigate replace to="dashboard" />} />
    </RouterRoutes>
  )
}

export { Routes }
