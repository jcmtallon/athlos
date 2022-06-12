import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { AthleteList } from '../views/AthleteList'
import { AthleteDetails } from '../views/AthleteDetails'

function AthletesRouter() {
  return (
    <Routes>
      <Route path="/" element={<AthleteList />}>
        <Route path=":athleteId" element={<AthleteDetails />} />
      </Route>

      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  )
}

export { AthletesRouter }
