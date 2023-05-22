import { m } from 'framer-motion'
import Image from 'next/image'

export default function Planet({
  x,
  introDuration,
  floatLimits,
  floatDuration,
  className,
  image,
  width,
  height,
  imageClassName
}) {
  return (
    <>
      <m.div
        initial={{ opacity: 0, y: 800, x }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: introDuration, type: 'spring', bounce: 0.2 }}
        className={`absolute left-0 right-0 ${className}`}
      >
        <m.div
          animate={{
            y: [floatLimits[0], floatLimits[1]]
          }}
          transition={{
            repeat: Infinity,
            repeatType: 'reverse',
            duration: floatDuration,
            ease: 'easeInOut'
          }}
        >
          <Image src={image} width={width} height={height} alt='' className={`mx-auto ${imageClassName}`}/>
        </m.div>
      </m.div>
    </>
  )
}