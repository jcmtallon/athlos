import React from 'react'
import { DashboardSectionId } from 'views/dashboard/DashboardSections'

function DesktopSideNav() {
  const sections = new Set<DashboardSectionId>(['athletes', 'marks'])

  const betaSections = new Set<DashboardSectionId>(['marks'])

  const renderLink = () => (sections.has('athletes') ? <div>A</div> : <div>B</div>)

  return (
    <div>
      Desktop Side Nav
      <div>Athletes</div>
      <div>Marks</div>
    </div>
  )
}

export { DesktopSideNav }
