import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer className="text-white/80 py-6  mx-auto pl-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Credit */}
        <p className="text-sm text-center md:text-left">
          Designed & developed by  <span className="text-sky-300 font-medium">Sehar Sitara </span> 
           using Next.js & Tailwind CSS. Deployed with Vercel.
        </p>
        </div>
        </footer>
    </div>
  )
}
