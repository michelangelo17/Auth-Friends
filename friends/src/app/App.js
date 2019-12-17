import React, { useEffect } from 'react'
import './App.scss'
import SignIn from './components/signIn/SignIn'
import { PrivateRoute, SignInRoute } from '../utils/usefulFuntions'
import FriendsList from './components/friendsList/FriendsList'
import { useDispatch } from 'react-redux'
import { checkToken } from '../redux/slices'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(checkToken())
  }, [dispatch])
  return (
    <>
      <SignInRoute exact path='/' component={SignIn} />
      <PrivateRoute path='/home' component={FriendsList} />
    </>
  )
}

export default App
