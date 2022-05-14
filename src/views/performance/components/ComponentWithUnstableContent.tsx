/* eslint-disable react/no-unstable-nested-components */
// Disabling on purpose for testing.

import React from 'react'

function ComponentWithUnstableContent() {
  // eslint-disable-next-line react/function-component-definition
  const Content = () => {
    return <div>Component inside another component without memoization (unstable)</div>
  }

  return (
    <div>
      <Content />
    </div>
  )
}

export { ComponentWithUnstableContent }
