import React from 'react'
import { useSelector } from 'react-redux'

import { getCart } from './cartSlice'
import { Card, List } from '@mantine/core'
import { CheckoutItem } from './CheckoutItem'

import classes from './CheckoutList.module.css'

export default function CheckoutList() {
  const cart = useSelector(getCart)

  console.table(cart)

  return (
    <List className={classes.list}>
      {cart.map((cartItem) => (
        <List.Item className={classes.item} key={cartItem.id}>
            <CheckoutItem cartItem={cartItem}/>
        </List.Item>
      ))}
    </List>
  )
}
