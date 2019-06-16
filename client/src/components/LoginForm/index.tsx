import * as React from 'react'
import { CtaText, Input } from './styles'
import { BasicButton } from '../../styles/buttons'

type Props = {
  addUser: (user: IUser) => void
}

const LoginForm: React.FC<Props> = ({ addUser }) => {
  const [username, setUsername] = React.useState('')

  return (
    <>
      <CtaText>Enter your username</CtaText>
      <Input value={username} onChange={e => setUsername(e.target.value)} />
      <BasicButton
        disabled={username.trim().length <= 0}
        onClick={() => addUser({ id: 'test', username })}>
        LOGIN
      </BasicButton>
    </>
  )
}

export default LoginForm
