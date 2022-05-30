import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Athletes } from './views/Athletes'
import { MarkList } from './views/Marks'

function DashboardRouter() {
  return (
    <Routes>
      <Route path="athletes/*" element={<Athletes />} />
      <Route path="marks" element={<MarkList />} />
      <Route path="*" element={<Navigate replace to="athletes" />} />
    </Routes>
  )
}

export { DashboardRouter }
