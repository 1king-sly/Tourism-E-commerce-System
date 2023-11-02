import React from 'react'
import Special from './Special'

const Specials = () => {
  return (
    <div className='w-screen flex flex-row max-[485px]:flex-col  mt-48 xl:px-52 lg:px-24 sm:px-5' id='Special'>
        <Special specialTitle="Couples Special Offer" specialDesc="For the love birds we have got you, enjoy the best of romance at a special offer" specialImage="/images/couples.jpg" />

        <Special className="row-reverse" specialImage="/images/adventure.jpg" specialTitle="Adventures" specialDesc="Whoever said pictures don't speak was surely right, they do scream"/>
        

    </div>
  )
}

export default Specials