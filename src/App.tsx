import React from 'react'
import { GlobalStyles, ThemeProvider } from './theme'
import { Routes } from './views/Routes'

const App = function () {
  return (
    <>
      {/* TODO: Add suspense
      TODO: Add i18nProvider
      TODO: Add theme provider
      TODO: Add AppErrorBoundary
      TODO: Add some ToastProvider */}
      <GlobalStyles />
      <ThemeProvider>
        <Routes />
      </ThemeProvider>
    </>
  )
}

export default App
