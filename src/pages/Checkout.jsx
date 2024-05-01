import { Container } from '@mantine/core'
import React from 'react'
import CheckoutList from '../features/cart/CheckoutList'
import PaymentMethod from '../features/cart/PaymentMethod'

export default function Checkout() {
  return (
    <Container display={'flex'} style={{ justifyContent: 'space-between'}} pt={50} pb={50}>
      <CheckoutList/>
      <PaymentMethod/>
    </Container>
  )
}
