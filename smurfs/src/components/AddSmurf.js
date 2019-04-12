import React , {Component} from 'react'
import Loader from 'react-loader-spinner'
import './Smurf.css'

class AddSmurf extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      height: '',
      age: ''
    }
  }
  handleChange = (e)=>{
    this.setState({[e.target.name]: e.target.value})
  }
  addSmurf = (e) => {
      e.preventDefault()
    this.props.moreSmurfs(this.state).then(()=>{
        this.props.toggle()
    })
    this.setState({name: '', email: '', age: ''})
  }
  render(){
    return (
        <div className='smurfs-list-container'>
        <h1>Add a Smurf</h1>
        <div className='smurfs-container'>
        <form onSubmit={this.addSmurf} className="add-smurf-form">
            <fieldset>
            <label htmlFor='name'>Name</label>
            <input type='text' value={this.state.name} name='name' onChange={this.handleChange} />
            </fieldset>
            <fieldset>
            <label htmlFor='email'>Height</label>
            <input type='text' value={this.state.height} name='height' onChange={this.handleChange} />
            </fieldset>
            <fieldset>
            <label htmlFor='age'>Age</label>
            <input type='text' value={this.state.age} name='age' onChange={this.handleChange} />
            <button type='submit' id="add-smurf">{this.props.isAdding ? <Loader type='ThreeDots' color='#1f2a38' height='12' width='26' /> : 'Add Friend'}</button>
            </fieldset>
        </form>
    </div>
        </div>
    )
    }
    }

export default AddSmurf;
