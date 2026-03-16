'use client'
import Link from 'next/link'

export function MegaMenu() {
  const upozilas = ['Fulchhari', 'Sundarganj', 'Palashbari', 'Gaibandha Sadar']

  return (
    <div className="absolute left-0 top-full bg-white shadow-lg mt-2 w-96 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 grid grid-cols-2 gap-4 z-50">
      {upozilas.map((upozila) => (
        <Link
          key={upozila}
          href={`/upozila/${upozila.toLowerCase()}`}
          className="p-2 hover:bg-blue-100 rounded-lg block"
        >
          {upozila}
        </Link>
      ))}
    </div>
  )
}