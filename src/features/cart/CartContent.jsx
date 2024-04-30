import { Avatar, Button, Group, List, Text } from '@mantine/core'
import React from 'react'
import classes from './CartContent.module.css'
import { useDispatch, useSelector } from 'react-redux'
import {
  decreaseQuantity,
  getCart,
  getTotalCartPrice,
  increaseQuantity,
} from './cartSlice'
import { Link } from 'react-router-dom'
import EmptyCart from './EmptyCart'

export default function CartContent() {
  const cart = useSelector(getCart)
  const totalCartPrice = useSelector(getTotalCartPrice)

  const dispatch = useDispatch()

  if(!cart.length) return <EmptyCart/>

  return (
    <div className={classes.cartContent}>
      <List className={classes.list}>
        {cart.map((cartItem) => (
          <List.Item style={{ listStyle: 'none' }} key={cartItem.id}>
            <Group wrap="nowrap">
              <Avatar src={cartItem.image} size={94} radius="md" />
              <div>
                <Group>
                  <Text fz="lg" fw={500} className={classes.name}>
                    {cartItem.name}
                  </Text>
                  <Text>{cartItem.price * cartItem.quantity}</Text>
                </Group>
                <Group>
                  <Button
                  color='yellow'
                    onClick={() => dispatch(decreaseQuantity(cartItem.id))}
                  >
                    -
                  </Button>
                  <Text>{cartItem.quantity}</Text>
                  <Button
                  color='yellow'
                    onClick={() => dispatch(increaseQuantity(cartItem.id))}
                  >
                    +
                  </Button>
                </Group>
              </div>
            </Group>
          </List.Item>
        ))}
      </List>
      <Group>
        <Text>Total:</Text>
        <Text>{totalCartPrice}</Text>
      </Group>
      <Link className={classes.link} to="/checkout">Checkout</Link>
    </div>
  )
}
