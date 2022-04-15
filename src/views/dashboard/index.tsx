import React from 'react'
import { pipeProviders } from 'utils'
import { DashboardRouter } from './DashboardRouter'

const DashboardProviders = pipeProviders()
// TODO: AuthProvider
// TODO: React.Suspense
// TODO: Other providers
// TODO: Onboardings
// TODO: Feature Provider

function Dashboard() {
  return (
    <DashboardProviders>
      {/* TODO: Another suspense ? with a page skeleton */}
      {/* TODO: Other Data providers / Stripe */}
      <DashboardRouter />
    </DashboardProviders>
  )
}

export { Dashboard }
