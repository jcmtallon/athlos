import React, { useState } from 'react'

function ComponentWithStateChanges() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <button type="button" onClick={() => setCount(n => n + 1)}>
        Increase Count
      </button>
      Count: {count}
    </div>
  )
}

export { ComponentWithStateChanges }
