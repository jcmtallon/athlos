import { CssBaseline } from '@mui/material'
import React from 'react'
import { Routes } from './views/Routes'

const App = function () {
  return (
    <>
      {/* TODO: Add suspense
      TODO: Add i18nProvider
      TODO: Add theme provider
      TODO: Add AppErrorBoundary
      TODO: Add some ToastProvider */}
      <CssBaseline />
      <Routes />
    </>
  )
}

export default App
