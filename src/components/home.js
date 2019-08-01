import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom'
import DarkSecret from './DarkSecret'

class Home extends React.Component {

  render() {
    return(
      <div className="homeContainer">
        <h1>Tell Me Who You Killed!</h1>
        <DarkSecret />
        <Link to={'/second'}>List of Dead people</Link>
      </div>
    )
  }
}

export default Home