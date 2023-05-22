'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import Link from 'next/link'

export default function Home() {
  const width = typeof window !== 'undefined' ? window.visualViewport.width : 0

  return (
    <main className="flex min-h-screen flex-col items-center justify-center overflow-hidden relative">
      <motion.section
        className='flex flex-col items-center justify-center'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <p className='font-medium'>HOLA, YO SOY</p>
        <h1 className='text-3xl sm:text-7xl font-extrabold sm:font-black text-center whitespace-pre-line'>{`Oscar Julian
        Umaña Benavides
        `}</h1>

        <Image src='/oscar.jpg' width={200} height={200} alt='' className='rounded-full my-5'/>

        <div className="flex items-center space-x-5 mb-3">
          <Link href='https://www.linkedin.com/in/oscar-julian-a95924189/'>
            <BsLinkedin className='text-4xl'/>
          </Link>
          <Link href='https://github.com/Lexuil'>
            <BsGithub className='text-4xl'/>
          </Link>
        </div>

        <p className='text-xl font-medium'>Desarrollador web</p>
        <p className=''>Estudiante de ingeniería de electrónica</p>

        <div className="flex items-center space-x-5 mb-3">
          <button className='bg-white bg-opacity-10 border rounded-lg text-white px-5 py-2 mt-5 font-medium'>Proyectos</button>
          <button className='bg-white bg-opacity-10 border rounded-lg text-white px-5 py-2 mt-5 font-medium'>Contactarme</button>
        </div>
      </motion.section>

      {/* Mars */}
      <motion.div
        initial={{ opacity: 0, y: 800, x: -1 * (width / 3) }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.5, type: 'spring', bounce: 0.2 }}
        className='absolute top-28 left-0 right-0 -z-10'
      >
        <motion.div
          animate={{
            y: [10, -9]
          }}
          transition={{
            repeat: Infinity,
            repeatType: 'reverse',
            duration: 1.5,
            ease: 'easeInOut'
          }}
        >
          <Image src='/mars.png' width={500} height={500} alt='' className='mx-auto'/>
        </motion.div>
      </motion.div>

      {/* Other */}
      <motion.div
        initial={{ opacity: 0, y: 800, x: width / 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 3, type: 'spring', bounce: 0.2 }}
        className='absolute top-28 left-0 right-0 -z-20 brightness-[0.15]'
      >
        <motion.div
          animate={{
            y: [8, -7]
          }}
          transition={{
            repeat: Infinity,
            repeatType: 'reverse',
            duration: 5,
            ease: 'easeInOut'
          }}
        >
          <Image src='/other.png' width={200} height={200} alt='' className='mx-auto rotate-90'/>
        </motion.div>
      </motion.div>

      {/* Other */}
      <motion.div
        initial={{ opacity: 0, y: 800, x: width / 3 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.9, type: 'spring', bounce: 0.2 }}
        className='absolute bottom-28 left-0 right-0 -z-10 brightness-[0.1]'
      >
        <motion.div
          animate={{
            y: [-8, 7]
          }}
          transition={{
            repeat: Infinity,
            repeatType: 'reverse',
            duration: 5,
            ease: 'easeInOut'
          }}
        >
          <Image src='/other.png' width={100} height={100} alt='' className='mx-auto rotate-90'/>
        </motion.div>
      </motion.div>

      {/* Deimos */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className='absolute top-48 left-0 right-0'
      >
        <motion.div
          animate={{
            x: [400, -600, 400],
            zIndex: [0, -20]
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
            times: [0, 0,7, 1],
            ease: 'easeInOut'
          }}
        >
          <Image src='/other.png' width={100} height={100} alt='' className='mx-auto'/>
        </motion.div>
      </motion.div> */}
    </main>
  )
}
