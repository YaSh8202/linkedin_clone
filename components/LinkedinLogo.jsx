import React from "react";
import Image from "next/image";

export default function LinkedinLogo() {
  return (
    <div className="w-32 md:w-36 lg:w-40">
      <Image
        width={200}
        height={100}
        className=""
        alt="linkedin"
        src="/logo-with-text.svg"
      />
    </div>
  );
}
