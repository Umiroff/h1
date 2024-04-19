import React from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { toggleTheme } from '../../context/themeSlice'

function Navbar() {
  const users = useSelector(s=> s.users.value)
  let theme = useSelector(state=> state.theme.value)
  let dispatch = useDispatch()

  return (
    <div className='navbar'>
        <h2>Redux Toolkit</h2>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/create-user"}>Create user</NavLink>
        <NavLink to={"/all-users"}>All users <sup>{users.length}</sup></NavLink>
        <button onClick={()=> dispatch(toggleTheme())}>{theme ? "Light" : "Dark"}</button>
    </div>
  )
}

export default Navbar