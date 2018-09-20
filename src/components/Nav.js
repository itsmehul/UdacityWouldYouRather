import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav (props) {
  return (
    <nav className='nav'>
      <ul>
        <li>
          <NavLink to='/' exact activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/new' activeClassName='active'>
            New Question
          </NavLink>
        </li>
        <li>
          <NavLink to='/leaderboard' activeClassName='active'>
            Leaderboard
          </NavLink>
        </li>
        <li style={{"fontWeight":"700","textAlign":"right","width":"500px"}}>
          {props.isAuthenticated===true
          ?<NavLink to='/login' activeClassName='active'> Login </NavLink>
          :props.authedUser
        }

        </li>
      </ul>
    </nav>
  )
}