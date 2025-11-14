import React from 'react'

export default function Footer(){
  return (
    <footer className='bg-black text-white py-10'>
      <div className='max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-6'>
        <div>
          <div className='w-36 h-10 bg-gray-700 rounded flex items-center justify-center text-sm'>Logo</div>
          <p className='text-xs mt-3 max-w-sm'>Company description from saved HTML — replace with real content and links.</p>
        </div>
        <div className='text-sm'>
          <h6 className='font-semibold'>Quick Links</h6>
          <ul className='mt-2 space-y-1'>
            <li><a href='#'>About</a></li>
            <li><a href='#'>CSR</a></li>
            <li><a href='#'>Careers</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
