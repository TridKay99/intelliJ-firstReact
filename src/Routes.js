import React from 'react'
import { Route, Switch} from 'react-router-dom'
import Home from './components/home'
import SecondPage from './components/secondPage'

class Routes extends React.Component {

  render() {
    return (
      <Switch>
        <Route path='/second' component={SecondPage} />
        <Route path='/' component={Home} />
      </Switch>
    )
  }
}

export default Routes