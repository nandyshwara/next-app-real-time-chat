"use client";
import { LogOutButton } from "./authButtons";
import { useState, useEffect } from "react";
import axios from "axios";
interface SessionType {
  user: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  };
}

interface LeftPanelProps {
  session: SessionType | null;
}

export default function Header({ session }: LeftPanelProps) {
  const [jeweleryData, setJeweleryData] = useState([]);
  
  const getAllUsers = async () => {
    try {
      const responseData = await axios.get("/api/users/getAllUsers");
      console.log(responseData);
    } catch (error) {
      console.log(error);
    }
  };

  const getUserByEmail = async () => {
    try {
      const responseData = await axios.get("/api/users/getUserById",{ params: { email: 'nandyshwara.a@gmail.com'} });
      
      console.log("user by email" ,responseData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    // getAllUsers();
    getUserByEmail();
  }, []);

  return (
    <div className="bg-slate-500 rounded-br-md rounded-tr-md py-10 h-fit">
      <div className="flex flex-row justify-between justify-items-end gap-20 w-10/12 mx-auto">
        <p className="p-2 text-2xl font-semibold">
          Welcome to the JVL chatter , {session?.user?.name}
        </p>
        <LogOutButton className="" session={session} />
      </div>
    </div>
  );
}
