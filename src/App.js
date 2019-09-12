import React, { useState, useEffect } from 'react'
import axios from 'axios'

function App() {

	const [ data, setData ] = useState({
		users: [],
		error: false
	})

	const fetchUser = async () => {
		try {
			const res = await axios.get('https://jsonplaceholder.typicode.com/users')
			setData({
				users: res.data,
				error: false
			})
		} catch {
			setData({
				error: true
			})
		}
	}

	useEffect(() => {
		fetchUser()
	}, [])

  return (
    <div className="App">
    {data.users.map((user, idx) => (
    	<div>
	    	<h1>{user.name}</h1>
	      <h4>{user.username}</h4>
	      <h6>{user.email}</h6>
      </div>
    ))}
    </div>
  )
}

export default App
