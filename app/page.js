"use client"
import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data: session } = useSession()
  console.log(session);
  if (session) {
    return <>
      <div className="w-[400px] flex flex-col items-center justify-center">
        Signed in as {session.user.email}
        <br />
        <img src={session.user.image} height={200} width={200} alt="image" />
        <br />
        <button className="bg-red-500" onClick={() => signOut()}>Sign out</button>
      </div>
    </>
  }
  return <>
    Not signed in <br />
    <button onClick={() => signIn()}>Sign in</button>
  </>
}