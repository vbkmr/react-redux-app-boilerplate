import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
  }

  render() {
    return (
      <div>
        <p>
        {'This is my App!'}
        </p>
      </div>
    )
  }
}

App.propTypes = {
}

function mapStateToProps(state) {
  return {
  }
}

export default connect(mapStateToProps)(App)