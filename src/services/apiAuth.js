import { supabase } from './supabase'

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    throw new Error(error.message)
  }

  return data
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession()

  if (!session.session) return null

  const { data, error } = await supabase.auth.getUser()

  if (error) {
    throw new Error(error.message)
  }

  return data?.user
}

export async function logout() {
  const { error } = await supabase.auth.signOut()

  if (error) {
    throw new Error(error.message)
  }
}

export async function getActiveUser() {
  const {
    data: { user, error },
  } = await supabase.auth.getUser()

  if (error) {
    throw new Error(error.message)
  } else {
    const { data, error } = await supabase
      .from('customers')
      .select('*')
      .eq('email', user.email)

    if (error) {
      throw new Error(error.message)
    }

    return data
  }
}

export async function getOrder(id) {
  const { data: orders, error } = await supabase
    .from('orders')
    .select('*')
    .eq('id', id)
    .single()

  if (error) {
    throw new Error(error.message)
  }

  return orders
}
