import React from 'react'
import PropTypes from 'prop-types'


//const App = () => <h1>Hello</h1>

class App extends React.Component {
  render(){
    return (
      <div>
        <h1>{this.props.txt}
        {this.props.cat}</h1>
      </div>
    )
  }
}
App.PropTypes = {
  txt:PropTypes.string,
  cat:PropTypes.number.isRequired

}

App.defaultProps = {
  cat : 5
}
export default App


