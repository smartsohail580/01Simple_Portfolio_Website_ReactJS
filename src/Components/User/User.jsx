import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userid} = useParams()

  return (
    <div className='text-center bg-slate-500 p-5 text-2xl'>
      User: {userid}
    </div>
  )
}

export default User
