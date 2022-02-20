import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Athletes } from './views/athletes/Athletes'

const Dashboard = function () {
  return (
    // TODO: Layout component
    // TODO: Suspense
    // TODO: lazy loading
    <div className="h-screen flex-1 flex flex-col relative pl-40">
      <div className="h-24 z-10">Athletes</div>
      <div className="absolute top-0 bottom-0 left-0 w-40 overflow-auto">
        <div>athletes</div>
        <div>marks</div>
        <div>publications</div>
      </div>
      <div className="flex-1 flex flex-col p-4">
        <Routes>
          <Route
            path="athletes"
            element={
              // Feature Route + Feature Flag
              <Athletes />
            }
          />
          <Route path="*" element={<Navigate replace to="athletes" />} />
        </Routes>
      </div>
    </div>
  )
}

export { Dashboard }
