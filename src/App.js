import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Navigation from './components/Navigation'
import Dogs from './containers/Dogs'
import DogForm from './containers/DogForm'
import Dog from './containers/Dog'



class App extends Component {
  render() {
    return (
        <Router>
          <Navigation/>
          <div className="App">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/dogs" component={Dogs}/>
              <Route exact path="/dog/new" component={DogForm}/>
              <Route path="/dogs/:id" component={Dog}/>
              

            </Switch>
          </div>
        </Router>
    )
  }
}
export default App;
