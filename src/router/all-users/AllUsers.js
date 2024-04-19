import React from 'react'
import "./AllUsers.css"
import Users from '../../components/users/Users'
import Empty from '../../components/empty/Empty'
import { useSelector } from 'react-redux'

function AllUsers() {
  let users = useSelector(state => state.users.value)
  let theme = useSelector(state => state.theme.value)
  return (
    <div className={`all__users${theme ? "dark" : ""}`}>
      {
        users.length ? <Users data={users}/> : <Empty/>
      }
    </div>
  )
}

export default AllUsers