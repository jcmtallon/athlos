import React from 'react'
import { ComponentWithStateChanges } from './ComponentWithStateChanges'
import { ComponentWithUnstableContent } from './ComponentWithUnstableContent'
import * as S from './Performance.styles'

function Performance() {
  return (
    <div>
      <S.Box>
        <ComponentWithUnstableContent />
      </S.Box>
      <S.Box>
        <ComponentWithStateChanges />
      </S.Box>
    </div>
  )
}

export { Performance }
