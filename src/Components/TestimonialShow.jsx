import React from 'react'
import Testimonial from './Testimonial'
import { Icon } from '@iconify/react'

const TestimonialShow = () => {
  return (
    <div className='w-full flex flex-row gap-3 mt-1 px-44 py-8 -ml-[] justify-center '>
        <Testimonial quote={ <Icon icon="raphael:quote" color="black" width="40" height="40" className='quote' />} comment="This was not a trip this was definately something else, never have I had such a great outdoor session I almost felt at home" user="Laria" />
        <Testimonial quote={ <Icon icon="raphael:quote" color="black" width="40" height="40" className='quote' />} comment="Splendid adventure, it definately exceeded its value am definately gonna recommend it to anyone out there who is looking to hav" user="Val" />
        <Testimonial quote={ <Icon icon="raphael:quote" color="black" width="40" height="40" className='quote' />} comment="Never had I thought of going for a holiday and actually I was forced to this but had I known this would be the case, I think I would hae been the one to force others😂😂😂" user="Kinsly" />
        <Testimonial quote={ <Icon icon="raphael:quote" color="black" width="40" height="40" className='quote' />} comment="Never had I thought of going for a holiday and actually I was forced to this but had I known this would be the case, I think I would hae been the one to force others😂😂😂" user="Kinsly" />
    </div>
  )
}

export default TestimonialShow