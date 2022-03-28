import { AppErrorBoundary } from 'components/src/AppErrorBoundary'
import React from 'react'
import { GlobalStyles, ThemeProvider } from './theme'
import { Routes } from './views/Routes'

function App() {
  return (
    <>
      <ThemeProvider>
        <GlobalStyles />
        <AppErrorBoundary>
          <React.Suspense fallback={<div>Suspense Fallback!!</div>}>
            {/* TODO: SUSPENSE */}
            {/* TODO: i18n provider */}
            {/* TODO: redux store */}
            {/* TODO: Connected Router? */}
            {/* TODO: Tracking Provider? */}
            {/* TODO: Remote Config Provider */}
            {/* TODO: Toast Provider */}
            <Routes />
          </React.Suspense>
        </AppErrorBoundary>
      </ThemeProvider>
    </>
  )
}

export default App
