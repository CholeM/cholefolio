import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="bg-violet-500 p-4 text-center text-white text-md">
      <p>© 2023, Designed and developed with 💖 by <Link href="/#about" className="font-semibold hover:underline">Chole M</Link></p>
    </div>
  )
}