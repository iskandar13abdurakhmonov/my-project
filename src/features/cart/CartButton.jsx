import React, { useState, useRef } from 'react'
import { Box } from '@mantine/core'
import { HiOutlineShoppingCart } from 'react-icons/hi2'
import { useSelector } from 'react-redux'
import { getCart } from './cartSlice'
import CartContent from './CartContent'

import classes from './CartButton.module.css'

export default function CartButton() {
  const totalCartQuantity = useSelector(getCart)

  const [isHovered, setIsHovered] = useState(false)
  const cartRef = useRef(null)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = (e) => {
    const cartButton = document.querySelector('.cart-icon')
    const cartContent = cartRef.current

    const isHoverOverCartButton = cartButton.contains(e.relatedTarget)
    const isHoverOverCartContent = cartContent.contains(e.relatedTarget)

    if (!isHoverOverCartButton && !isHoverOverCartContent) {
      setIsHovered(false)
    }
  }

  return (
    <div style={{ marginTop: '20px'}}>
      <Box
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        variant="default"
        className="cart-icon"
        style={{ position: 'relative'}}
      >
        <HiOutlineShoppingCart size={27} />
        {totalCartQuantity.length ? <span className={classes.cartQuantity}>
          {!totalCartQuantity.length ? '0' : totalCartQuantity.length}
        </span> : ''}
      </Box>

      {isHovered && (
        <Box
          ref={cartRef}
          className="cart-content"
          style={{
            position: 'absolute',
            left: '1000px',
            top: '55px',
            zIndex: '1',
          }}
          onMouseLeave={handleMouseLeave}
        >
          <CartContent />
        </Box>
      )}
    </div>
  )
}
