import { DashboardLayout } from 'features/dashboard'
import React, { useEffect, useState } from 'react'
import { getMark } from 'services/firebase/firestore'
import * as S from './Marks.styles'

function Marks() {
  const [marks, setMarks] = useState<any>(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await getMark()
      console.log(response)
      setMarks(response)
    }

    fetchData()
  }, [])

  return (
    <DashboardLayout sideNav={<>SomeOtherMenu</>}>
      <S.Wrapper>
        {marks && (
          <div>
            <div>{marks.value}</div>
            <div>{marks.gender}</div>
          </div>
        )}
      </S.Wrapper>
    </DashboardLayout>
  )
}

export { Marks }
