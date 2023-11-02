import React from 'react'
import { Icon } from '@iconify/react'

const icon = () => {
  return (
    <div>
      
    <Icon icon="icon-park-outline:backpack" className='bag'  />
    <Icon icon="clarity:compass-line" className='compass'  />
    <Icon icon="clarity:camera-line" className='camera'  />
    <Icon icon="raphael:quote" color="white" width="40" height="40" className='quote' />
    </div>
 
  )
}

export default icon