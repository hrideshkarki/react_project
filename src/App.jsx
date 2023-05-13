import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import SignUp from './components/signup'
import SignInSide from './components/signin'
// import Navbar from './components/Navbar'
import ToDo from './Views/ToDo'
import Navbar from './Navbar'

export default function App() {

  const [user, setUser] = useState({})

  const logMeIn = (user) => {
    // this.setState({user: user})
    setUser(user)
  };
  const logMeOut = () => {
    // this.setState({user:{}})
    setUser({})
  };
  // create a function that routes somewhere...

    return (
      <>
                  <Navbar user={user} logMeOut = {logMeOut}/>
        <Routes>
          <Route path='/signup' element = {<SignUp />} />
          {/* <Route path="/" element={<Home/>}/> */}
          <Route path='/signin' element = {<SignInSide logMeIn={logMeIn} />} />
          {/* <Route path='/to-do' element={<Todo/>}/> */}
          <Route path='/todo' element = {<ToDo />} />
          {/* <Route path='/products' element={<Products user={user}/>}/> */}
          {/* <Route path='/products/:productId' element={<SingleProduct user={user}/>}/> */}
          {/* <Route path='/cart' element={<Cart user={user}/>}/> */}
        </Routes>
        </>
    )
  }