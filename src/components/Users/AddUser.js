import React, { useEffect, useRef, useState } from 'react'

import Card from '../UI/Card'
import Button from '../UI/Button'
import classes from './AddUser.module.css'
import UsersList from './UsersList'


const generateRandomId = () => {
  return Math.random().toString(36).substr(2, 9)
}

const AddUser = () => {

	const [usersList, setUsersList] = useState([])

  const usernameRef = useRef(null)
  const ageRef = useRef(null)

	useEffect(() => {
  }, [usersList])

  const handleSubmit = (e) => {
    e.preventDefault()
    const username = usernameRef.current.value
    const age = ageRef.current.value

    // Validate inputs
    if (!username) {
      alert('Username is required')
      return
    }

    if (!age) {
      alert('Age is required')
      return
    }

    if (isNaN(age)) {
      alert('Age must be a number')
      return
    }

    // Use the captured values as needed
    const randomId = generateRandomId()
    const user = {
      id: randomId,
      username,
      age,
    }
		setUsersList(prevUsers => [...prevUsers, user])
  }



  return (
    <div>
      <Card className={classes.card}>
        <form onSubmit={handleSubmit} className={classes.form}>
          <label htmlFor='username'>Username</label>
          <input
            ref={usernameRef}
            id='username'
            type='text'
            value={null}
            onChange={null}
          />
          <label htmlFor='age'>Age (Years)</label>
          <input
            ref={ageRef}
            id='age'
            type='number'
            value={null}
            onChange={null}
          />
          <Button type='submit' className={classes.submit}>
            Add User
          </Button>
        </form>
      </Card>
      <UsersList users={usersList} />
    </div>
  )
}

export default AddUser
