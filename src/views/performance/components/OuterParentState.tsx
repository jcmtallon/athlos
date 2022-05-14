import React, { useState } from 'react'

function OuterParentState() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>useState inside parent component.Changes in states causes component and children to rerender.</div>
      <div>Count: {count}</div>
      <button type="button" onClick={() => setCount(count + 1)}>
        Button
      </button>
    </>
  )
}

export { OuterParentState }
