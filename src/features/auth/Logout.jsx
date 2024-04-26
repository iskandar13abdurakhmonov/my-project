import { Button } from '@mantine/core'
import React from 'react'
import { useLogout } from './useLogout'

export default function Logout() {
  const { logout, isLoading } = useLogout()

  return (
    <Button
      onClick={logout}
      disabled={isLoading}
      visibleFrom="xs"
      variant="default"
    >
      Log out
    </Button>
  )
}
