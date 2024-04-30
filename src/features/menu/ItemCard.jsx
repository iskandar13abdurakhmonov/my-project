import { Card, Image, Text, Group, Badge, Center, Button } from '@mantine/core'
import {
  IconGasStation,
  IconGauge,
  IconManualGearbox,
  IconUsers,
} from '@tabler/icons-react'
import classes from './ItemCard.module.css'
import { useDispatch } from 'react-redux'
import { addItem } from '../cart/cartSlice'

const mockdata = [
  { label: '4 passengers', icon: IconUsers },
  { label: '100 km/h in 4 seconds', icon: IconGauge },
  { label: 'Automatic gearbox', icon: IconManualGearbox },
  { label: 'Electric', icon: IconGasStation },
]

export function ItemCard({ item }) {
  const { id, image, name, price } = item

  const dispatch = useDispatch()

  const handleAddToCart = () => {
    const newItem = {
      id,
      name,
      image,
      price,
      quantity: 1,
      totalPrice: price * 1,
    }

    dispatch(addItem(newItem))
  }

  const features = mockdata.map((feature) => (
    <Center key={feature.label}>
      <feature.icon size="1.05rem" className={classes.icon} stroke={1.5} />
      <Text size="xs">{feature.label}</Text>
    </Center>
  ))

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section className={classes.imageSection}>
        <Image src={item.image} w={200} h={200} alt={item.name} />
      </Card.Section>

      <Group justify="space-between" mt="md">
        <div>
          <Text fw={500}>{item.name}</Text>
          <Text fz="xs" c="dimmed">
            Free recharge at any station
          </Text>
        </div>
        <Badge color="#FCC419" variant="outline">
          25% off
        </Badge>
      </Group>

      <Card.Section className={classes.section}>
        <Group gap={30}>
          <div>
            <Text fz="xl" fw={700} style={{ lineHeight: 1 }}>
              {item.price}
            </Text>
            <Text fz="sm" c="dimmed" fw={500} style={{ lineHeight: 1 }} mt={3}>
              per day
            </Text>
          </div>

          <Button
            color="#FCC419"
            radius="xl"
            style={{ flex: 1 }}
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        </Group>
      </Card.Section>
    </Card>
  )
}
