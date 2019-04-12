import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getSmurfs, moreSmurfs } from '../actions'
import AddSmurf from './AddSmurf'
import Smurf from './Smurf'
import './App.css'
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own.
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      formActive: false
    }
  }
  componentDidMount () {
    this.props.getSmurfs()
  }

  toggleForm = ()=>{
    this.setState({formActive: !this.state.formActive})
  }

  render () {
    return (
      <div className='App'>
        <h1>SMURFS! 2.0</h1>
        <div className='add-smurf-button'>
          <button onClick={()=> this.toggleForm()}>Add a Smurf</button>
          {this.state.formActive
            &&
            <AddSmurf 
            isAdding={this.props.addingSmurf}
            moreSmurfs={this.props.moreSmurfs}
            toggle={this.toggleForm}
            />
        }
        </div>
        <div className='main'>
        {
          !this.state.formActive && 
          <Smurf smurfs={this.props.smurfs} />
        }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  error: state.error,
  fetchingSmurfs: state.fetchingSmurfs,
  addingSmurf: state.addingSmurf,
  updatingSmurf: state.updatingSmurf,
  deletingSmurf: state.deletingSmurf
})

export default connect(mapStateToProps, { getSmurfs, moreSmurfs })(App)
