import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

export default function Testimonials(){
  const t = [
    { name: 'Ravi Bagaria', text: 'Great quality and timely delivery.' },
    { name: 'Saurav Agarwal', text: 'Excellent customer service and product range.' },
    { name: 'Pooja Sharma', text: 'Reliable supplier for our projects.' },
    { name: 'Amit Kumar', text: 'Consistent quality, recommended.' },
  ]
  const [ref, inView] = useInView({ threshold: 0.15 })

  return (
    <section ref={ref} className='bg-white py-12'>
      <div className='max-w-6xl mx-auto px-4'>
        <h2 className='text-3xl font-medium mb-6'>What <span className='text-orange-500'>Our</span> Customer <span className='text-orange-500'>Says</span></h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {t.map((tt, i) => (
            <motion.div key={tt.name} initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.12 * i, duration: 0.6 }} className='bg-gray-50 p-5 rounded-2xl shadow-md'>
              <div className='flex items-center gap-3 mb-3'>
                <div className='w-12 h-12 rounded-full bg-gray-200'></div>
                <div>
                  <h4 className='font-semibold'>{tt.name}</h4>
                </div>
              </div>
              <p className='text-gray-600 text-sm'>{tt.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
