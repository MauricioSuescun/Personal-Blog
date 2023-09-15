import Image from "next/image";
import Link from "next/link";
import React from "react";
import avatar from "@/public/avatar.png";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark">
      <div className="w-16 rounded-full overflow-hidden border border-solid border-dark mr-2">
        <Image
          src={avatar}
          alt="avatar yesid"
          className="w-full h-auto rounded-full"
        />
      </div>
      <span className="font-bold text-xl">YMTS</span>
    </Link>
  );
};

export default Logo;
