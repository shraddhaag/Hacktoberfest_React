import React from 'react'
import PropTypes from 'prop-types'


//const App = () => <h1>Hello</h1>

class App extends React.Component {
  constructor(){
    super(); //this points to App now
    this.state = {
      txt : 'this is the state txt',
      cat : 0
    }
  }
  update( e ){
    this.setState({txt : e.target.value})
  }
  update1( e ){
    this.setState({cat : e.target.value})
  }

  render(){
    return (
      <div>
        <input type="text" onChange={this.update.bind(this)}/>
        <input type="number" onChange={this.update1.bind(this)}/>
        <h1>{this.state.txt} - {this.state.cat}</h1>
      </div>
    )
  }
}
export default App

