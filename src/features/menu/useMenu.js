import { useQuery } from '@tanstack/react-query'
import { getMenu } from '../../services/apiMenu'

export function useMenu() {
  const { data, isLoading } = useQuery({
    queryFn: getMenu,
    queryKey: ['menu'],
  })

  return { data, isLoading }
}
