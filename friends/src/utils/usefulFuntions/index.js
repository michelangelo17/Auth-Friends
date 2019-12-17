import axios from 'axios'
import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token')

  return axios.create({
    baseURL: 'http://localhost:5000/api',
    headers: {
      Authorization: token,
    },
  })
}

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { signedIn } = useSelector(state => state)
  return (
    <Route
      {...rest}
      render={() => (signedIn ? <Component /> : <Redirect to='/' />)}
    />
  )
}

export const SignInRoute = ({ component: Component, ...rest }) => {
  const { signedIn } = useSelector(state => state)
  return (
    <Route
      {...rest}
      render={() => (signedIn ? <Redirect to='/home' /> : <Component />)}
    />
  )
}
