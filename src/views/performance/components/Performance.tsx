import React, { useState } from 'react'
import { ComponentWithUnstableContent } from './ComponentWithUnstableContent'
import { OuterParentState } from './OuterParentState'
import * as S from './Performance.styles'

function Performance() {
  const [count, setCount] = useState(0)

  const stateSection = (
    <S.Box>
      <div>useState inside parent component.Changes in states causes component and children to rerender.</div>
      <div>Count: {count}</div>
      <button type="button" onClick={() => setCount(count + 1)}>
        Button
      </button>
    </S.Box>
  )

  return (
    <div>
      {stateSection}
      <S.Box>
        <OuterParentState />
      </S.Box>
      <ComponentWithUnstableContent />
    </div>
  )
}

export { Performance }
