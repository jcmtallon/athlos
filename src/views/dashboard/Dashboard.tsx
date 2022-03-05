import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Athletes } from './views/athletes/Athletes'
import * as S from './Dashboard.styles'

const Dashboard = function () {
  return (
    // TODO: Layout component
    // TODO: Suspense
    // TODO: lazy loading
    // TODO: Rethink layout so each view has control over the whole screen.
    <S.Wrapper>
      <S.TopBar>Athletes</S.TopBar>
      <S.SideBar>
        <div>LOGO</div>
        <div>Athletes</div>
        <div>Marks</div>
        <div>Yearbooks</div>
      </S.SideBar>
      <S.Body>
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
      </S.Body>
    </S.Wrapper>
  )
}

export { Dashboard }
