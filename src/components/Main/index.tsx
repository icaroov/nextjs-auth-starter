import { signIn, signOut, useSession } from 'next-auth/client'

import * as Styled from './styles'

const Main = () => {
  const [session, loading] = useSession()

  return (
    <Styled.Container>
      {!!loading && <Styled.Text>Loading...</Styled.Text>}

      {session ? (
        <>
          <Styled.Logo src="/assets/img/icon-1.png" />
          <Styled.Text>
            Hello, {session.user.email ?? session.user.name}
          </Styled.Text>
          <Styled.Button onClick={() => signOut()}>Sign Out</Styled.Button>
        </>
      ) : (
        <>
          <Styled.Text>You are not logged in!</Styled.Text>
          <Styled.Button onClick={() => signIn()}>Sign In</Styled.Button>
        </>
      )}
    </Styled.Container>
  )
}

export default Main
