import React from 'react'
import { NavLink } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
        <p>
            Dashboard
        </p>
        <NavLink to="/">Back to login</NavLink>
    </div>
  )
}

export default Dashboard