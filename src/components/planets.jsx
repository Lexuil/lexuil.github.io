import Planet from './planet'

export default function Planets() {
  const width = typeof window !== 'undefined' ? window.visualViewport.width : 0

  return (
    <>
      <Planet
        x={-1 * (width / 3)}
        introDuration={2.5}
        floatLimits={[10, -9]}
        floatDuration={1.5}
        image='/mars.png'
        width={500}
        height={500}
        className={'top-28 -z-10'}
      />
      <Planet
        x={width / 4}
        introDuration={3}
        floatLimits={[8, -7]}
        floatDuration={5}
        image='/other.png'
        width={200}
        height={200}
        className={'top-28 -z-20 brightness-[0.15]'}
        imageClassName={'rotate-90'}
      />
      <Planet
        x={width / 3}
        introDuration={2.9}
        floatLimits={[-8, 7]}
        floatDuration={5}
        image='/other.png'
        width={100}
        height={100}
        className={'bottom-28 -z-10 brightness-[0.1]'}
        imageClassName={'rotate-90'}
      />
    </>
  )
}