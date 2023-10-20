"use client"

import { signIn } from "next-auth/react"
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export function GithubSignInButton(){
    const router = useRouter();

  const handleClick = async () => {
    const result = await signIn("github");

  };
    
   
    return(
        <button className="bg-black text-white text-medium text-xl py-3 px-10 rounded-xl shadow-xl" onClick={handleClick}>
            Continue with Github
        </button>
    )
}

interface LogOutButtonProps {
    className?: string;
    session : SessionType | null ;
  }
  
  interface SessionType {
    user: {
      name?: string | null | undefined;
      email?: string | null | undefined;
      image?: string | null | undefined;
    };
  }
  
export function LogOutButton({className , session} : LogOutButtonProps ){
    const router = useRouter();
    if (!session) {
      router.push("/");
      return null;
    }
    const handleLogout = ()=>{
        signOut()
    }
    return(
        <button className={`bg-black text-white text-medium text-xl py-3 px-16 rounded-xl shadow-xl mx-auto ${className}`} onClick={handleLogout}>
            log out
        </button>
    )
}