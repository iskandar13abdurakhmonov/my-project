import React, { useState } from 'react'
import {
  Paper,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Text,
} from '@mantine/core'
import classes from './SignUpForm.module.css'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'
import { supabase } from '../../services/supabase'

export function SignUpForm() {
  const [email, setEmail] = useState('')
  const [fullName, setFullName] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const { data: user, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          },
        },
      })

      if (error) {
        throw new Error(error.message)
      } else {
        const { data, error: insertError } = await supabase
          .from('customer')
          .insert({
            name: fullName,
            gmail: email,
          })
          .single()

        if (insertError) {
          toast.error(insertError.message)
          throw new Error(insertError.message)
        } else {
          toast.success('Check your email address!')
          return data
        }
      }
    } catch (error) {
      toast.error(error.message)
      console.error(error.message)
    }
  }

  return (
    <form onSubmit={handleSubmit} className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
          Welcome back to MDIST Bakery!
        </Title>

        <TextInput
          label="Full Name"
          placeholder="John Doe"
          size="md"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <TextInput
          label="Email address"
          placeholder="hello@gmail.com"
          size="md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          mt="md"
          size="md"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Checkbox label="Keep me logged in" mt="xl" size="md" />
        <Button type="submit" color="#FCC419" fullWidth mt="xl" size="md">
          Sign Up
        </Button>

        <Text ta="center" mt="md">
          Already have an account?{' '}
          <Link to="/login" fw={700}>
            Login
          </Link>
        </Text>
      </Paper>
    </form>
  )
}
