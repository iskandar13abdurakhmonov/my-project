import { Button } from '@mantine/core'
import React from 'react'
import { useLogout } from './useLogout'

export default function Logout() {
  const { logout, isLoading } = useLogout()

  return (
    <Button
      style={{ marginTop: '20px' }}
      onClick={logout}
      disabled={isLoading}
      visibleFrom="xs"
      variant="default"
    >
      Log out
    </Button>
  )
}
