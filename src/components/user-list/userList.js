import React from 'react'

function UserList() {
  return (
    <div className='ml-3'>
         <li className="py-4 flex">
      <img className="h-10 w-10 rounded-full"  alt="" />
      <div className="ml-3">
        <p className="text-sm font-medium text-gray-900">qwertyu</p>
        <p className="text-sm text-gray-500">asdf</p>
      </div>
    </li>
    </div>
  )
}

export default UserList