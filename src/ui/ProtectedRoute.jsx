import React, { useEffect } from 'react'
import { useUser } from '../features/auth/useUser'
import Spinner from './Spinner'
import { useNavigate } from 'react-router-dom'
import { isAtEndOfNode } from '@tiptap/react'

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading } = useUser()

  const navigate = useNavigate()

  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate('/login')
    },
    [isAuthenticated, isLoading, navigate]
  )

  if (isLoading) return <Spinner />

  if (isAuthenticated) return children
}
