import { Reducer } from 'redux'
import { ACTION_USER } from '../actions/user'
const initialState = {
  id: null,
  username: null,
}

const UserReducer: Reducer<IUser> = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_USER.ADD.FINISH: {
      const { payload } = action
      return {
        ...state,
        ...payload,
      }
    }
    default: {
      return state
    }
  }
}

export default UserReducer
