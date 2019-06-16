import * as React from 'react'
import { CtaText, Input} from './styles'
import { BasicButton } from '../../styles/buttons'

const LoginForm: React.FC = () => {
  const [username, setUsername] = React.useState('')

  return (
    <>
      <CtaText>Enter your username</CtaText>
      <Input value={username} onChange={e => setUsername(e.target.value)} />
      <BasicButton
        disabled={username.trim().length <= 0}
        onClick={() => console.log('Current username', username)}>
        LOGIN
      </BasicButton>
    </>
  )
}

export default LoginForm
