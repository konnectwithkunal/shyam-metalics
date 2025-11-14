import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

export default function ProductsGrid(){
  const products = [
    'Ferro Alloys','Pellet','TMT Bars','Wire Rods','Aluminium Foil','Coal'
  ]
  const [ref, inView] = useInView({ threshold: 0.15 })

  return (
    <section ref={ref} className='max-w-7xl mx-auto px-4 py-12'>
      <h3 className='text-2xl font-semibold mb-4'>Products</h3>
      <motion.div initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4'>
        {products.map((p, i) => (
          <motion.a key={p} whileHover={{ scale: 1.03 }} className='block bg-white p-4 rounded-lg border hover:shadow-lg'>
            <h4 className='font-semibold text-sm'>{p}</h4>
            <div className='mt-3 h-24 flex items-center justify-center'>
              <div className='w-full h-full bg-gray-100 rounded flex items-center justify-center text-xs'>{p} image</div>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  )
}
