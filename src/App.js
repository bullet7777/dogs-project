import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Navigation from './components/Navigation'
import DogsList from './containers/DogsList'
import DogForm from './containers/DogForm'
import DogInfo from './containers/DogInfo'



class App extends Component {
  render() {
    return (
        <Router>
          <Navigation/>
          <div className="App">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/dogslist" component={DogsList}/>
              <Route exact path="/dog/new" component={DogForm}/>
              <Route path="/dogs/:id" component={DogInfo}/>
              

            </Switch>
          </div>
        </Router>
    )
  }
}
export default App;
