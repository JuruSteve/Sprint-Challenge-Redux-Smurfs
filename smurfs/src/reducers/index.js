/*
  Be sure to import in all of the action types from `../actions`
*/
import { GET_SMURFS,
  GET_SMURFS_SUCCESS,
  GET_SMURFS_FAILURE,
  MORE_SMURFS,
  MORE_SMURFS_SUCCESS,
  MORE_SMURFS_FAILURE } from '../actions'

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 */
const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SMURFS:
      return {
        ...state,
        fetchingSmurfs: true,
        error: ''
      }
    case GET_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        fetchingSmurfs: false,
        error: ''
      }
    case GET_SMURFS_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    case MORE_SMURFS:
      return {
        ...state,
        addingSmurfs: true,
        error: ''
      }
    case MORE_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        addingSmurfs: false,
        error: ''
      }
    case MORE_SMURFS_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer.
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
