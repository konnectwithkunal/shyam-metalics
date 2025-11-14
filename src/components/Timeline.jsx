import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

export default function Timeline(){
  const items = [
    { year: '1991', title: 'The Beginning of a Legacy' },
    { year: '2002', title: 'The First Spark' },
    { year: '2010', title: 'Major Expansion' },
    { year: '2018', title: 'Global Reach' },
    { year: '2023', title: 'Sustainable Growth' },
  ]
  const [ref, inView] = useInView({ threshold: 0.2 })

  return (
    <section ref={ref} className='py-10'>
      <div className='max-w-6xl mx-auto px-4'>
        <h2 className='text-3xl font-bold mb-3'>The Shyam <span className='text-orange-500'>Journey</span></h2>
        <p className='text-gray-600 mb-6'>A timeline of innovation, growth, and excellence.</p>
        <div className='overflow-x-auto'>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className='flex gap-6 items-start py-6'>
            {items.map((it, idx) => (
              <div key={it.year} className='flex-shrink-0 text-center'>
                <motion.div animate={{ scale: inView ? [0.9,1.05,1] : 1 }} transition={{ duration: 1.6, repeat: inView ? Infinity : 0, repeatDelay: 2 }} className='w-14 h-14 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold mb-3'>
                  {it.year}
                </motion.div>
                <div className='text-sm font-semibold text-gray-900 max-w-[140px]'>{it.title}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
