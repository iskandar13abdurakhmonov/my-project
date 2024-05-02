import { useQuery } from '@tanstack/react-query'
import { getActiveUser } from '../../services/apiAuth'

export function useCurrentUser() {
  const {
    data: userData,
    isLoading,
    error,
  } = useQuery({
    queryFn: getActiveUser,
    queryKey: ['currentUser'],
  })

  return { userData, isLoading, error }
}
