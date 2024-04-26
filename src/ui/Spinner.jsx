import { Loader } from '@mantine/core'
import React from 'react'
import classes from './Spinner.module.css' 

export default function Spinner() {
  return (
    <div className={classes.spinnerContainer}>
      <Loader color="#FCC419" />
    </div>
  )
}
