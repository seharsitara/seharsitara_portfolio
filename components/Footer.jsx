import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer className="text-white/80 py-6 mx-auto flex  items-center  justify-center ">
      <div className="container mx-auto md:px-12 lg:px-12 px-8 flex flex-col md:flex-row items-center justify-center gap-4">
        
        {/* Credit */}
        <p className="text-sm text-center md:text-center ">
          Designed & developed by  <span className="text-sky-300 font-medium">Sehar Sitara </span> 
           using Next.js & Tailwind CSS. Deployed with Vercel.
        </p>
        </div>
        </footer>
    </div>
  )
}
