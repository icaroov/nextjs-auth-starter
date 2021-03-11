import { signIn, signOut, useSession } from 'next-auth/client'

const Home = () => {
  const [session, loading] = useSession()

  if (loading) {
    return <h2>Loading...</h2>
  }

  if (session) {
    return (
      <div>
        Hello, {session.user.email ?? session.user.name} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    )
  } else {
    return (
      <div>
        You are not logged in! <br />
        <button onClick={() => signIn()}>Sign in</button>
      </div>
    )
  }
}

export default Home
