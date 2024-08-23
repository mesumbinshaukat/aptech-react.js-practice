import React from 'react'
import Navbar from './Components/navbar'
import Card from './Components/card'
import Form from './Components/form'

export const App = () => {
  return (
    <>
      <Navbar/>
      <h1>This is App Page</h1>
      <div className='row'>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <Form/>
      
    </>
  )
}

export const Home = () => {
  return (
    <>
    <h3>This Is Home page</h3>
    </>
  )
}
