"use client"

import { signIn } from "next-auth/react"
import { signOut } from "next-auth/react";

export function GithubSignInButton(){
    const handleClick = ()=>{
        signIn("github")
    }
    return(
        <button className="bg-black text-white text-medium text-xl py-3 px-10 rounded-xl shadow-xl" onClick={handleClick}>
            Continue with Github
        </button>
    )
}

interface LogOutButtonProps {
    className?: string;
  }
  
export function LogOutButton({className} : LogOutButtonProps){
    const handleLogout = ()=>{
        signOut()
    }
    return(
        <button className={`bg-black text-white text-medium text-xl py-3 px-16 rounded-xl shadow-xl mx-auto ${className}`} onClick={handleLogout}>
            log out
        </button>
    )
}