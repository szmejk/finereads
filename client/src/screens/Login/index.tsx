import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { Container } from './styles'
import LoginForm from '../../components/LoginForm'
import { addUserRequest, addUserFinish } from '../../store/reducers/actions/user'

type StateProps = {
  user: IUser
}

type DispatchProps = {
  addUser: (user: IUser) => void
}

type Props = StateProps & DispatchProps

const mapStateToProps = (state: AppState) => ({
  user: state.user,
})

const mapDispatchToProps: (dispatch: Dispatch) => DispatchProps = dispatch => ({
  addUser: (user: IUser) => {
    dispatch(addUserFinish(user))
  },
})

const Login: React.FC<Props> = ({ addUser }) => (
  <Container>
    <LoginForm addUser={addUser} />
  </Container>
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
