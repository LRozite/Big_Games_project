
import React, { Component, Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from './views/header/Navbar';
import HomePage from './views/home/home';
import StorePage from './views/store/store';
import Footer from './views/footer/Footer';



class App extends Component {
  
  render(){
    return (
      <BrowserRouter basename={''} >      

        <Suspense fallback={<h1>LOADING</h1>}>

          <Navbar />

          <Routes> 
          
            <Route exact path="/" element={ <HomePage /> } />
            <Route exact path="/home" element={ <HomePage /> } />
            <Route exact path="/store" element={ <StorePage /> } />

          </Routes>
        </Suspense>
          
        <Footer />

      </BrowserRouter>
    )
  }
}

export default App;
