import React from 'react'
import './CSScomponents/DarkSecret.css'

class DarkSecret extends React.Component {
  state = {
    secrets: [],
    value: null
  };

  handleChange = () => {
    this.setState({
      value: this.state.value
    })
  }

  handleSubmit = () => {
    console.log(this.state.secrets)
  }

  render() {
    return(
      <div className="formContainer">
        <form id="form" onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input className="nameBox" type="text" name="name" />
            Who Did You Murder:
            <input className="secretBox" type="text" value={this.state.value} onChange={this.handleChange}/>
          </label>
          <input className="submitBox" type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default DarkSecret