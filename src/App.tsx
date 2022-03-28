import { AppErrorBoundary } from 'components/src/AppErrorBoundary'
import React from 'react'
import { GlobalStyles, ThemeProvider } from './theme'
import { Routes } from './views/Routes'

function App() {
  return (
    <>
      {/* TODO: Add suspense
      TODO: Add i18nProvider
      TODO: Add theme provider
      TODO: Add AppErrorBoundary
      TODO: Add some ToastProvider */}
      <ThemeProvider>
        <GlobalStyles />
        <AppErrorBoundary>
          {/* TODO: SUSPENSE */}
          {/* TODO: i18n provider */}
          {/* TODO: redux store */}
          {/* TODO: Connected Router? */}
          {/* TODO: Tracking Provider? */}
          {/* TODO: Remote Config Provider */}
          {/* TODO: Toast Provider */}
          <Routes />
        </AppErrorBoundary>
      </ThemeProvider>
    </>
  )
}

export default App
