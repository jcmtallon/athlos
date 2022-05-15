import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AthleteList } from './views/Athletes'
import { Marks } from './views/Marks/Marks'

function DashboardRouter() {
  return (
    <Routes>
      <Route path="athletes" element={<AthleteList />} />
      <Route path="marks" element={<Marks />} />
      <Route path="*" element={<Navigate replace to="athletes" />} />
    </Routes>
  )
}

export { DashboardRouter }
