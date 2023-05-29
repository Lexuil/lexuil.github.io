import Image from 'next/image'
import Link from 'next/link'
import { m } from 'framer-motion'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { IoMdMail } from 'react-icons/io'
import { useContext } from 'react'
import { ViewContext } from '@/context'

export default function Presentation() {
  const setViewProjects = useContext(ViewContext)

  return (
    <m.section
      className='flex flex-col items-center justify-center min-h-screen'
      initial={{ display: 'none', opacity: 0 }}
      animate={{
        display: 'flex',
        opacity: 1,
        transition: { duration: 1, delay: 1 }
      }}
      exit={{
        opacity: 0,
        x: 700,
        transition: { duration: 1 }
      }}
    >
      <p className='font-medium'>HOLA, YO SOY</p>
      <h1 className='text-3xl sm:text-7xl font-extrabold sm:font-black text-center whitespace-pre-line'>Oscar Umaña</h1>

      <Image src='/oscar.jpg' width={200} height={200} alt='' className='rounded-full my-5'/>

      <div className="flex items-center space-x-5 mb-3">
        <Link href='https://www.linkedin.com/in/oscar-julian-a95924189/' aria-label="Oscar Umaña Linkedin">
          <BsLinkedin className='text-4xl'/>
        </Link>
        <Link href='https://github.com/Lexuil' aria-label="Oscar Umaña Github">
          <BsGithub className='text-4xl'/>
        </Link>
        <a href = "mailto: lexuil97@gmail.com" aria-label="Oscar Umaña email">
          <IoMdMail className='text-4xl'/>
        </a>
      </div>

      <p className='text-xl font-medium'>Desarrollador web</p>
      <p className=''>Estudiante de ingeniería de electrónica</p>
      <button
        className='bg-white bg-opacity-10 border rounded-lg text-white px-5 py-2 mt-5 font-medium'
        onClick={() => setViewProjects(true)}
      >
        Proyectos
      </button>
    </m.section>
  )
}