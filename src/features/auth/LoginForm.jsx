import React, { useState } from 'react'
import {
  Paper,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Text,
  Loader,
} from '@mantine/core'
import classes from './LoginForm.module.css'
import { Link } from 'react-router-dom'
import { useLogin } from './useLogin'

export function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { login, isLoading } = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!email || !password) return

    login(
      { email, password },
      {
        onSettled: () => {
          setEmail('');
          setPassword('')
        },
      }
    )
  }

  return (
    <form onSubmit={handleSubmit} className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
          Welcome MDIST Bakery
        </Title>

        <TextInput
          label="Email address"
          placeholder="hello@gmail.com"
          size="md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          mt="md"
          size="md"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
        <Checkbox label="Keep me logged in" mt="xl" size="md" />
        <Button color='#FCC419' type="submit" fullWidth mt="xl" size="md" disabled={isLoading}>
          {!isLoading ? 'Log in' : <Loader size={20} />}
        </Button>

        <Text ta="center" mt="md">
          Don&apos;t have an account? <Link to="/signup">Register</Link>
        </Text>
      </Paper>
    </form>
  )
}
