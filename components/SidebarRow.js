/* eslint-disable jsx-a11y/alt-text */
import { signOut } from "next-auth/client";
import Image from "next/image";
import React from "react";

export default function SidebarRow({ src, title, Icon }) {
  return (
    <div className="flex items-center space-x-2 p-4 hover:bg-gray-200 rounded-xl cursor-pointer active:border-b-2 active:border-blue-500">
      {src && (
        <Image
          onClick={signOut}
          className="rounded-full"
          src={src}
          width={30}
          height={30}
          layout="fixed"
        />
      )}
      {Icon && <Icon className="h-8 w-8 text-blue-500" />}
      <p className="hidden sm:inline-flex font-semibold">{title}</p>
    </div>
  );
}
