import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Athletes } from './views/athletes/Athletes'
import { Marks } from './views/marks/Marks'

function DashboardRouter() {
  return (
    <Routes>
      <Route path="athletes" element={<Athletes />} />
      <Route path="marks" element={<Marks />} />
      <Route path="*" element={<Navigate replace to="athletes" />} />
    </Routes>
  )
}

export { DashboardRouter }
