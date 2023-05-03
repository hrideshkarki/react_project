import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom'
import SignUp from './components/signup'
import SignInSide from './components/signin'
import Navbar from './Navbar'


export default class App extends Component {
  render() {
    return (
      <React.Fragment>
                  <Navbar />
        <Routes>
          <Route path='/signup' element = {<SignUp />} />
          <Route path='/signin' element = {<SignInSide />} />


          {/* <SignUp />
          <SignInSide /> */}
        </Routes>
      </React.Fragment>
    )
  }
}
