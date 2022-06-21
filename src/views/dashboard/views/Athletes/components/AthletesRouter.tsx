import React, { useEffect, useState } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { SlidePanelRoute } from 'components'
import { Club, Federation, getClubs, getFederations } from 'olympos'
import { AthleteList } from '../views/AthleteList'
import { AthleteDetails } from '../views/AthleteDetails'

function AthletesRouter() {
  const [clubs, setClubs] = useState<{ [key: string]: Club } | null>(null)
  const [federations, setFederations] = useState<{ [key: string]: Federation } | null>(null)

  useEffect(() => {
    const fetchClubs = async () => {
      const data = await getClubs()
      setClubs(data)
    }

    fetchClubs()
  }, [])

  useEffect(() => {
    const fetchFederation = async () => {
      const data = await getFederations()
      setFederations(data)
    }

    fetchFederation()
  }, [])

  return (
    <Routes>
      <Route path="/" element={<AthleteList clubs={clubs} federations={federations} />}>
        <Route
          path=":athleteId"
          element={
            <SlidePanelRoute parentRouteUrl="/dashboard/athletes/">
              <AthleteDetails clubs={clubs} federations={federations} />
            </SlidePanelRoute>
          }
        />
      </Route>

      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  )
}

export { AthletesRouter }
