import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFriendsList } from '../../../redux/slices'

const FriendsList = () => {
  const dispatch = useDispatch()
  const { friends } = useSelector(state => state)
  useEffect(() => {
    dispatch(getFriendsList())
  }, [dispatch])
  return (
    <>
      <h1>Friends</h1>
      {friends.map(friend => (
        <div key={friend.id}>
          <h2>{friend.name}</h2>
          <p>{friend.age}</p>
          <p>{friend.email}</p>
        </div>
      ))}
    </>
  )
}

export default FriendsList
