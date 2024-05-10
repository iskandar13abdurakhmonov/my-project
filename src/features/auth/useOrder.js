import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { getOrder } from '../../services/apiAuth'

export function useOrder() {
  const searchParams = useParams()
  const id = searchParams.latestOrderId

  const { data: order, isLoading } = useQuery({
    queryFn: () => getOrder(id),
    queryKey: ['order', id],
  })

  return { order, isLoading }
}
