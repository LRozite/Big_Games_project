
import React, { Component, Suspense } from "react"
import { connect } from 'react-redux'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import PropTypes from 'prop-types'

import { RequestReviews } from './redux_store/actions/act_Reviews'  

import Header from './views/header/Header';
import HomePage from './views/home/home';
import StoreCategoryPage from './views/store/Store_categories'
import StorePage from './views/store/Store';
import Footer from './views/footer/Footer';



class App extends Component {

  componentDidMount(){ 
    //[] requesting review data 
    this.props.GetReviews();
  }

  render(){
    return (
      <BrowserRouter basename={''} >      

        <Suspense fallback={<h1>LOADING</h1>}>

          <Header />

          <Routes> 
          
            <Route exact path="/" element={ <HomePage /> } />
            <Route exact path="/home" element={ <HomePage /> } />
            <Route exact path="/store" element={ <StoreCategoryPage /> } />
            <Route path='/store/:cat_name' element={ <StorePage /> } />

          </Routes>
        </Suspense>
          
        <Footer />

      </BrowserRouter>
    )
  }
}

App.propTypes = {
  prop_reviews: PropTypes.any,
}

const mapStateToProps = (state) => ({  
  prop_reviews: state.rootReducer_Reviews
})
const mapDispatchToProps = (dispatch) => ({
 GetReviews: ( ) => { dispatch( RequestReviews( ) ) },
})

export default connect( mapStateToProps, mapDispatchToProps )(App)
