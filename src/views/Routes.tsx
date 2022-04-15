import React from 'react'
import { Navigate, Route, Routes as RouterRoutes } from 'react-router-dom'
import { Dashboard } from './dashboard'

const DesignSystem = React.lazy(() => import('./designSystem').then(mod => ({ default: mod.DesignSystem })))

function Routes() {
  return (
    <RouterRoutes>
      <Route path="design-system" element={<DesignSystem />} />
      <Route path="design" element={<DesignSystem />} />
      {/* TODO: Legal Pages */}
      <Route path="dashboard/*" element={<Dashboard />} />
      <Route path="*" element={<Navigate replace to="dashboard" />} />
    </RouterRoutes>
  )
}

export { Routes }
