// TODO: Bring this from the Criteria feature.
interface CriteriaProps {
  requiresPermission: string
  requiresFeatureFlag: string
  requiresSubscriptionFeature: string
}

type DashboardSectionRequirements<Id extends string> = CriteriaProps & { id: Id }

function section<Id extends string>(id: Id, requirements: CriteriaProps): DashboardSectionRequirements<Id> {
  return {
    id,
    ...requirements,
  }
}

const dashboardSections = [
  section('athletes', {
    requiresPermission: '',
    requiresFeatureFlag: '',
    requiresSubscriptionFeature: '',
  }),
  section('marks', {
    requiresPermission: '',
    requiresFeatureFlag: '',
    requiresSubscriptionFeature: '',
  }),
]

type DashboardSectionId = typeof dashboardSections[number]['id']

export { dashboardSections }
export type { DashboardSectionId, DashboardSectionRequirements }
