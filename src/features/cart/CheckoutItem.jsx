import { Avatar, Text, Group, Button } from '@mantine/core'
import { IconPhoneCall, IconAt } from '@tabler/icons-react'
import classes from './CheckoutItem.module.css'
import { useDispatch } from 'react-redux'
import { decreaseQuantity, increaseQuantity } from './cartSlice'

export const formatPrice = ({ price }) => {
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price)

  return formattedPrice
}

export function CheckoutItem({ cartItem }) {
  const { id, image, name, price, quantity } = cartItem
  const totalPriceByItem = price * quantity
  const dispatch = useDispatch()

  return (
    <Group wrap="nowrap" className={classes.group}>
      <Avatar src={cartItem.image} size={94} radius="md" />
      <Text fz="lg" fw={500} className={classes.name}>
        {name}
      </Text>
      <Group>
        <Button
          color="yellow"
          radius="xl"
          onClick={() => dispatch(decreaseQuantity(id))}
        >
          -
        </Button>
        <Text>{cartItem.quantity}</Text>
        <Button
          color="yellow"
          radius="xl"
          onClick={() => dispatch(increaseQuantity(id))}
        >
          +
        </Button>
      </Group>
      <Text>{formatPrice({ price: totalPriceByItem })}</Text>
    </Group>
  )
}
