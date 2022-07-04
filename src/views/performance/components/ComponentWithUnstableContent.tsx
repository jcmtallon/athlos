/* eslint-disable react/no-unstable-nested-components */
// Disabling on purpose for testing.

import React, { useState } from 'react'

function FooStable() {
  console.log('Stable Foo rendered')
  const [bla, setBla] = useState('test')

  const handleClick = () => {
    setBla(n => `${n} test`)
  }

  return (
    <div>
      <h1>STABLE FOO</h1>
      <button type="button" onClick={handleClick}>
        Change inner state Current inner state: {bla}
      </button>
    </div>
  )
}

function ComponentWithUnstableContent() {
  console.log('Foo parent rendered')

  // eslint-disable-next-line react/no-unstable-nested-components
  function Foo() {
    console.log('UnStable Foo rendered')
    const [bla, setBla] = useState('test')

    const handleClick = () => {
      setBla(n => `${n} test`)
    }

    return (
      <div>
        <h1>FOO</h1>
        <p>Built with arrow function. Expecting this to be unstable</p>
        <button type="button" onClick={handleClick}>
          Change inner state Current inner state: {bla}
        </button>
      </div>
    )
  }

  return (
    <div>
      {Foo()}
      <FooStable />
    </div>
  )
}

export { ComponentWithUnstableContent }
