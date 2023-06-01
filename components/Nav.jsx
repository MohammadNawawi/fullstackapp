"use-client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          className="object-contain"
          src="/assets/images/logo.svg"
          alt="Nyareh Logo"
          width={30}
          height={30}
        />
        <p className="logo_text">Nyareh</p>
      </Link>

      {/* Mobile Navigation */}
    </nav>
  );
};

export default Nav;