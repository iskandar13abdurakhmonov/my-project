import { Container, Grid, SimpleGrid, Skeleton, rem } from '@mantine/core'
import styles from './MenuLayout.module.css'
import { ItemCard } from './ItemCard'
import { useMenu } from './useMenu'
import Spinner from '../../ui/Spinner'

const PRIMARY_COL_HEIGHT = rem(300)

export function MenuLayout() {
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`

  const { data, isLoading } = useMenu()

  if (isLoading) return <Spinner />

  return (
    <Container size="md" mt={40} mb={40}>
      <Grid>
        {data.map((item) => (
          <Grid.Col key={item.id} span={{ xs: 12, sm: 6, md: 4 }}>
            <ItemCard item={item} />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  )
}
