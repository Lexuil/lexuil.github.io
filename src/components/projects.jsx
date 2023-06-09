import Image from 'next/image'
import { AnimatePresence, m } from 'framer-motion'
import { useState, useContext } from 'react'
import { ViewContext } from '@/context'
import { BiLink } from 'react-icons/bi'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'
import FrameworkIcon from './frameworkIcon'
import { projects } from '@/data/projects'

export default function Projects() {
  const [page, setPage] = useState(0)
  const setViewProjects = useContext(ViewContext)

  const changePage = (direction) => {
    if (direction === 'left') {
      if (page > 0) setPage(page - 1)
      else setPage(projects.length - 1)
    } else {
      if (page < projects.length - 1) setPage(page + 1)
      else setPage(0)
    }
  }

  const variants = {
    hidden: { opacity: 0, x: -100, transition: { duration: 0.5 }, transitionEnd: { display: 'none' } },
    visible: { display: 'block', opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.55 } },
    exit: { opacity: 0, x: 100, transition: { duration: 0.5 } }
  }

  return (
    <m.section
      className='flex flex-col items-center justify-center'
      initial={{ display: 'none', opacity: 0, x: -700 }}
      animate={{
        display: 'flex',
        opacity: 1, x: 0,
        transition: { duration: 1, delay: 1 }
      }}
      exit={{
        opacity: 0,
        x: 700,
        transition: { duration: 0.5 }
      }}
    >
      {/* Title */}
      <div className="hidden sm:flex flex-col items-center">
        {/* Back button */}
        <button
          className='bg-white bg-opacity-10 border rounded-lg text-white px-5 py-2 mt-5 md:mt-10 font-medium'
          onClick={() => setViewProjects(false)}
        >
          Regresar
        </button>

        <p className='font-medium mt-5'>ESTOS SON MIS</p>
        <div className="relative">
          <h1 className='text-3xl sm:text-7xl font-extrabold sm:font-black text-center whitespace-pre-line'>Proyectos</h1>
          <BsFillArrowLeftCircleFill className='absolute inset-y-0 -left-16 my-auto text-5xl cursor-pointer' onClick={() => changePage('left')}/>
          <BsFillArrowRightCircleFill className='absolute inset-y-0 -right-16 my-auto text-5xl cursor-pointer' onClick={() => changePage('right')}/>
        </div>
      </div>

      <AnimatePresence>
        <m.div
          key={page}
          variants={variants}
          initial='hidden'
          animate='visible'
          exit='exit'
          className='mx-10'
        >
          <a href={projects[page].link} target='_blank' className='h-full'>
            <Image src={projects[page].image} width={1000} height={800} alt={projects[page].name} className='hidden sm:block rounded-xl my-5'/>
            <Image src={projects[page].image2} width={400} height={400} alt={projects[page].name} className='block sm:hidden rounded-xl my-5 object-contain'/>
          </a>
          <a
            href={projects[page].link}
            target='_blank'
            className={`
              flex items-center
              ${projects[page].link ? 'hover:underline' : ''}
            `}
          >
            {projects[page].link && <BiLink className='h-7 w-7' />}
            <h2 className='text-xl sm:text-3xl font-bold'>{projects[page].name}</h2>
            {/* Frameworks logos */}
            <div className='flex items-center space-x-2 ml-5'>
              {projects[page].frameworks.map((framework, index) => {
                return (
                  <FrameworkIcon framework={framework} key={`${framework}-${index}`} />
                )
              })}
            </div>
          </a>
          <p className=''>{projects[page].description}</p>
        </m.div>
      </AnimatePresence>

      {/* Title mobile */}
      <div className="flex sm:hidden flex-col items-center mb-8">
        <p className='font-medium m-5 md:mt-20'>ESTOS SON MIS</p>
        <div className="relative">
          <h1 className='text-3xl sm:text-7xl font-extrabold sm:font-black text-center whitespace-pre-line'>Proyectos</h1>
          <BsFillArrowLeftCircleFill className='absolute inset-y-0 -left-14 my-auto text-4xl cursor-pointer' onClick={() => changePage('left')}/>
          <BsFillArrowRightCircleFill className='absolute inset-y-0 -right-14 my-auto text-4xl cursor-pointer' onClick={() => changePage('right')}/>
        </div>

        {/* Back button */}
        <button
          className='bg-white bg-opacity-10 border rounded-lg text-white px-5 py-2 mt-5 font-medium'
          onClick={() => setViewProjects(false)}
        >
          Regresar
        </button>
      </div>
    </m.section>
  )
}