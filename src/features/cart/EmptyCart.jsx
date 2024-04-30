import React from 'react'

import classes from './CartContent.module.css'

export default function EmptyCart() {
  return (
    <div className={classes.cartContent}>
      <span className={classes.emptyMessage}>
        Your cart is empty, start selecting items
      </span>
    </div>
  )
}
