import { authConfig } from "@/lib/auth";
import { GithubSignInButton, LogOutButton } from "./components/authButtons";
import { getServerSession } from "next-auth";
import Header from "./components/Header";

export default async function Home() {
  const session = await getServerSession(authConfig);
  
  return (
    <div >
      {
        session ? (<div className="flex flex-col w-full min-h-screen">
          <Header session={session}/>
        </div>) : (<div className="w-full flex min-h-screen flex-col items-center justify-between py-2"><GithubSignInButton/></div>)
      }
    </div>
  )
}
