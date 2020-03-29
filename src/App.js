import React, { Fragment } from 'react'
import { BrowserRouter as Router, Link, Switch, Route, NavLink } from 'react-router-dom'
import Accountant from './components/Accountant'
import List from './components/List'
import Form from './components/Form'
import Example1 from './components/Example1'
import Comment from './components/Comment'
import FormCRUD from './components/Form-CRUD'
import Homepage from './components/Homepage'
import Contact from './components/Contact'
import About from './components/About'
import Pokemon from './components/Pokemon'

function App() {
  return (
    <Fragment>
      <div className="container">
        <Router>
          <h1>Hello World React</h1>
          <hr />
          <Accountant />
          <hr />
          <List />
          <hr />
          <Form />
          <hr />
          <Example1 />
          <hr />
          <Comment />
          <hr />
          <FormCRUD />
          <hr />
          <h1>Navbar...</h1>
          <div className="btn-group mb-4">
            <Link to='/' className="btn btn-dark">
              Homepage
            </Link>
            <Link to='/contact' className="btn btn-dark">
              Contact
            </Link>
            <NavLink to='/about' className="btn btn-dark" activeClassName='active'>
              About
            </NavLink>
          </div>
          <Switch>
            <Route path='/' exact>
              <Homepage />
            </Route>
            <Route path='/contact'>
              <Contact />
            </Route>
            <Route path='/about/:name' exact>
              <Pokemon/>
            </Route>
            <Route path='/about'>
              <About />
            </Route>
          </Switch>
        </Router>
      </div>
    </Fragment>
  );
}

export default App;