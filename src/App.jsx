
import React, { Component, Suspense } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import './App.css';
import HomePage from './views/home/home';
import StorePage from './views/store/store'



class App extends Component {
  
  render(){
    const currentView = window.location.href.split('/'); 
    
    console.log(currentView)

    return (
      <BrowserRouter basename={''} >      

        <Suspense fallback={<h1>LOADING</h1>}>
          <Switch location={location}> 
          
            <Route exact path={[ '/', '/home' ]} component={HomePage}/>
            <Route exact path={'/store'} component={StorePage} />

          </Switch>
        </Suspense>
          
      </BrowserRouter>
    )
  }
}

export default App;
