import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { SlidePanelRoute } from 'components'
import { AthleteList } from '../views/AthleteList'
import { AthleteDetails } from '../views/AthleteDetails'

function AthletesRouter() {
  return (
    <Routes>
      <Route path="/" element={<AthleteList />}>
        <Route
          path=":athleteId"
          element={
            <SlidePanelRoute parentRouteUrl="/dashboard/athletes/">
              <AthleteDetails />
            </SlidePanelRoute>
          }
        />
      </Route>

      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  )
}

export { AthletesRouter }
