import { DashboardLayout } from 'features/dashboard'
import React, { useEffect, useState } from 'react'
import { addMark, getMark } from 'olympos'
import * as S from './Marks.styles'

function Marks() {
  const [marks, setMarks] = useState<any>(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await getMark()
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
            <button type="button" onClick={() => addMark()}>
              Add Mark
            </button>
          </div>
        )}
      </S.Wrapper>
    </DashboardLayout>
  )
}

export { Marks }
