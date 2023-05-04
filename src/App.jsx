import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom'
import SignUp from './components/signup'
import SignInSide from './components/signin'
import Navbar from './Navbar'
import ToDo from './Views/ToDo'


export default class App extends Component {
  render() {
    return (
      <React.Fragment>
                  <Navbar />
        <Routes>
          <Route path='/signup' element = {<SignUp />} />
          <Route path='/signin' element = {<SignInSide />} />
          <Route path='/todo' element = {<ToDo />} />



          {/* <SignUp />
          <SignInSide /> */}
        </Routes>
      </React.Fragment>
    )
  }
}
