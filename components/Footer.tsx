import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <div className="flex flex-col py-10 border-t border-gray-800 w-full items-center">
      <div className="flex flex-col gap-1 justify-center items-center">
        <Image
          src="/assets/icons/DocuMate.svg"
          height={42}
          width={70}
          alt="documate"
        />
        <p className="text-md text-blue-100">©{date} All Rights Reserved.</p>
      </div>

      <div className="flex gap-1">
        <p className="text-sm text-blue-100 ">Created by </p>
        <span className="text-sm text-blue-100 underline hover:text-blue-500 hover:no-underline">
          <Link href="https://ayushscripts.vercel.app" target="_blank">
            Ayush
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Footer;
