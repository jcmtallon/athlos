import React from 'react'
import { createDashboardSection } from 'features/dashboard'
import { IconRunner } from 'components'

const dashboardSections = [
  createDashboardSection('athletes', {
    label: 'Athletes',
    desc: 'Some desc',
    icon: <IconRunner />,
    to: 'athletes',
    mobileStatus: 'ENABLED',
    desktopStatus: 'ENABLED',
    requiresPermission: '',
    requiresFeatureFlag: '',
    requiresSubscriptionFeature: '',
  }),
  createDashboardSection('marks', {
    label: 'Marks',
    desc: 'Some desc',
    icon: <IconRunner />,
    to: 'marks',
    mobileStatus: 'ENABLED',
    desktopStatus: 'ENABLED',
    requiresPermission: '',
    requiresFeatureFlag: '',
    requiresSubscriptionFeature: '',
  }),
]

// TODO: change to AthlosDashboardSectionId
type DashboardSectionId = typeof dashboardSections[number]['id']

export { dashboardSections }
export type { DashboardSectionId }
