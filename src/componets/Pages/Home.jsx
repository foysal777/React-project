import React from 'react'
import Carousel from '../Slider/Slider'

const Home = () => {
  return (
    <div>

      <section>

        {/* Carousel  */}
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
          <Carousel></Carousel>
        </div>
        {/* card section  */}
          <section>
            <p  className='text-center text-5xl pt-10'>Types of vegetable</p>
          </section>



      </section>


    </div>
  )
}

export default Home