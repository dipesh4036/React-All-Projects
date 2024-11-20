import React from 'react'
import Addtodo from './Components/Addtodo'
import Todos from './Components/Todos'

const App = () => {
  return (
    <div className='flex flex-col w-full h-screen bg-gray-500 items-center p-10 flex-wap'>
    <Addtodo/>
    <Todos/>
    </div>
  )
}

export default App