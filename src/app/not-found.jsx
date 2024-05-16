import React from "react";
import Link from "next/link";
const NotFound = () => {
  return (
    <div className="flex justify-center">
      <div className="text-center">
        <h2 className="font-bold text-3xl">Page not Found :(</h2>
        <p>Sorry the page you are looking for doesn't exists.</p>
        <Link href="/" className="underline">Return Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
