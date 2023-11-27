import React from 'react'
import Herovideo from "../assest/HeroVideo.mp4"
import Herovideosvg from "../assest/HeroVideosvg.png"

function Herosection() {
  return (
      <div>
          <div className='herovideo w-screen  bg-black relative '>
              <video src={Herovideo} className='h-[80vh] w-full object-cover' autoPlay='{true}' loop muted >
              </video>
              <img src={Herovideosvg} className='absolute -bottom-1  w-[4%]'/>
          </div>
    </div>
  )
}

export default Herosection