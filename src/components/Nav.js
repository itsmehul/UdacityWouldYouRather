import React from 'react'
import { NavLink } from 'react-router-dom'
import { setAuthedUser } from "../actions/authedUser";


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
          ?"Please login first"
          :
          <React.Fragment>
          {props.authedUser}
          <NavLink to='/login' activeClassName='active' onClick={()=>this.props.dispatch(setAuthedUser(null))}> Logout </NavLink></React.Fragment>
        }

        </li>
      </ul>
    </nav>
  )
}