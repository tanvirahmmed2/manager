import About from '@/components/page/About'
import Featured from '@/components/page/Featured'
import Intro from '@/components/page/Intro'
import Latest from '@/components/page/Latest'
import Offer from '@/components/page/Offer'
import React from 'react'

const Main = () => {
  return (
    <div className='w-full overflow-hidden min-h-screen flex flex-col items-center justify-center'>
      <Intro/>
      <Featured/>
      <Offer/>
      <Latest/>
      <About/>
    </div>
  )
}

export default Main
