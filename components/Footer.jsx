import React from 'react'

export default function Footer() {
  return (
    <footer className="text-white/80 py-8 px-4 md:px-8 mb-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-4">
        
        {/* Credit */}
        <p className="text-sm text-center md:text-center">
          Designed & developed by  <span className="text-sky-300 font-medium">Sehar Sitara </span> 
           using Next.js & Tailwind CSS. Deployed with Vercel.
        </p>
      </div>
    </footer>
  )
}
