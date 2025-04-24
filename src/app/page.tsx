"use client"
import { useState, useEffect } from 'react'

const SearchUsers = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [users, setUsers] = useState<any[]>([])

  const handleSearch = async () => {
    const response = await fetch(`/api/users?search=${searchTerm}`)
    const data = await response.json()
    setUsers(data.existingUsers)
  }

  useEffect(() => {
    if (searchTerm === '') {
      setUsers([])
    }
  }, [searchTerm])

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search users"
      />
      <button onClick={handleSearch}>Search</button>

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.userName} - {user.email}</li>
        ))}
      </ul>
    </div>
  )
}

export default SearchUsers
