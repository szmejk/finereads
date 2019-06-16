import * as React from 'react'
import { connect } from 'react-redux'
import Books from '../Books'
import Login from '../Login'

type Props = {
  userLoggedIn: boolean
}
const mapStateToProps: (state: AppState) => Props = state => ({
  userLoggedIn: state.user.id !== null,
})

const Navigator: React.FC<Props> = ({ userLoggedIn }) => {
  if (userLoggedIn) {
    return <Books />
  } else {
    return <Login />
  }
}

export default connect(mapStateToProps)(Navigator)
