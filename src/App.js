import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import SingleBook from './pages/SingleBook'
import Cart from './pages/Cart'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
const App = () => {

  return (
    <main>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/book/:id' children={<SingleBook />}>

          </Route>
          <Route path='/books'>
            <Products />
          </Route>
          <Route path='/cart'>
            <Cart />
          </Route>
        </Switch>
      </Router>

    </main>
  )

}

export default App;
