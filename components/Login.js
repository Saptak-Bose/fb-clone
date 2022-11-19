/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import React from "react";
import { signIn } from "next-auth/client";

export default function Login() {
  return (
    <div className="grid place-items-center">
      <head>
        <title>Login</title>
      </head>
      <Image
        src="https://links.papareact.com/t4i"
        height={400}
        width={400}
        objectFit="contain"
      />
      <h1
        onClick={signIn}
        className="p-5 bg-blue-500 rounded-full text-white font-bold cursor-pointer mb-3"
      >
        Login with Facebook or GitHub
      </h1>
    </div>
  );
}
