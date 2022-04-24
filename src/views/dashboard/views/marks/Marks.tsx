import { DashboardLayout } from 'features/dashboard'
import React from 'react'
import * as S from './Marks.styles'

function Marks() {
  return (
    <DashboardLayout sideNav={<>SomeOtherMenu</>}>
      <S.Wrapper>Some Marks information</S.Wrapper>
    </DashboardLayout>
  )
}

export { Marks }
