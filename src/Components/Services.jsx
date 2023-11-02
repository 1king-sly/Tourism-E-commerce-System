import React from 'react'
import { Icon } from '@iconify/react'
import ServicesCard from './ServicesCard'

const Services = () => {
  return (
    <div id='services'>
    <div className="services flex gap-3
    -mt-20 w-full justify-between " id='services'>
      <ServicesCard icon={    <Icon icon="fluent:airplane-20-regular" className='plane z-10' width={40} color='#F5F5F5' rotate={3} />} title='Fly you out' desc='Show you the world from our angle'/>
      <ServicesCard icon={    <Icon icon="icon-park-outline:backpack" width={40} color='#F5F5F5' />} title='Camping' desc='Experience and be part of nature'/>
      <ServicesCard icon={     <Icon icon="clarity:compass-line" className='compass' width={40} color='#F5F5F5'  />
} title='Adventure Tour' desc='Take you to the wildest trip'/>
      <ServicesCard icon={    <Icon icon="clarity:camera-line" width={40} color='#F5F5F5' className='camera'  />
} title='Outbound Activity' desc='Create spectacular memories'/>

    </div></div>
  )
}

export default Services;