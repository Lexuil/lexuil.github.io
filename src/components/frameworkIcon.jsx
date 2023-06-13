import {
  SiLaravel,
  SiVuedotjs,
  SiTailwindcss,
  SiNextdotjs,
  SiReact,
  SiWordpress,
  SiWoo
} from 'react-icons/si'

export default function FrameworkIcon({ framework }) {
  const icons = {
    'Laravel': <SiLaravel className='w-6 h-6' />,
    'Vue.js': <SiVuedotjs className='w-6 h-6' />,
    'Tailwind CSS': <SiTailwindcss className='w-6 h-6' />,
    'Next.js': <SiNextdotjs className='w-6 h-6' />,
    'React.js': <SiReact className='w-6 h-6' />,
    'Wordpress': <SiWordpress className='w-6 h-6' />,
    'Woocommerce': <SiWoo className='w-6 h-6' />
  }

  return (
    <>
      {icons[framework]}
    </>
  )
}