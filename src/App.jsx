import React from 'react'

import { MantineProvider } from '@mantine/core'

import '@mantine/core/styles.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import Home from './pages/Home'
import AppLayout from './ui/AppLayout'
import Login from './pages/Login'
import SignUp from './pages/SignUp'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import ProtectedRoute from './ui/ProtectedRoute'
import Menu from './pages/Menu'
import Checkout from './pages/Checkout'
import { Toaster } from 'react-hot-toast'
import Status from './pages/Status'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
})

export default function App() {
  return (
    <MantineProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialOpen={true} />
        <Router>
          <Routes>
            <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="home" />} />
              <Route path="home" element={<Home />} />
              <Route path="menu" element={<Menu />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="status/:latestOrderId" element={<Status />} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
          </Routes>
        </Router>
      </QueryClientProvider>
      <Toaster
        position="top-right"
        gutter={8}
        toastOptions={{
          duration: 3000,
        }}
      />
    </MantineProvider>
  )
}
