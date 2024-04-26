import React from 'react';
import {
  Paper,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Text,
} from '@mantine/core';
import classes from './SignUpForm.module.css';
import { Link } from 'react-router-dom';

export function SignUpForm() {
  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
          Welcome back to Mantine!
        </Title>

        <TextInput label="Full Name" placeholder="John Doe" size="md" />
        <TextInput label="Email address" placeholder="hello@gmail.com" size="md" />
        <PasswordInput label="Password" placeholder="Your password" mt="md" size="md" />
        <Checkbox label="Keep me logged in" mt="xl" size="md" />
        <Button color='#FCC419' fullWidth mt="xl" size="md">
          Sign Up
        </Button>

        <Text ta="center" mt="md">
          Already have an account?{' '}
          <Link to='/login' fw={700}>
            Login
          </Link>
        </Text>
      </Paper>
    </div>
  );
}
