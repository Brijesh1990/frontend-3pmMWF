import React from 'react'
import HeaderApp from './HeaderApp'
import ContentApp from './ContentApp'
export default function Layout() {
  return (
    <div className='w-full p-15 mt-15 bg-white mx-auto'>
    <HeaderApp />
    <ContentApp />
    </div>
  )
}
