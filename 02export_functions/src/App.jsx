import React from 'react'
import Navbar from './Components/navbar'
import Card from './Components/card'
import Form from './Components/form'
import {BrowserRouter, Routes, Route} from 'react-router-dom';



export const App = () => {
  return (
    <>
    <BrowserRouter>
      <Navbar></Navbar>

        <Routes>
          <Route path='/' element={<App/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
    </BrowserRouter>
    </>
  )
}


// export const App = () => {
//   return (
//     <>
//       <Navbar/>
//       <h1>This is App Page</h1>
//       <div className='row'>
//         <Card/>
//         <Card/>
//         <Card/>
//       </div>
//       <Form/>
      
//     </>
//   )
// }

// export const Home = () => {
//   return (
//     <>
//     <h3>This Is Home page</h3>
//     </>
//   )
// }
