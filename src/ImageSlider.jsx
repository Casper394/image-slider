import { useState } from 'react'
import { ArrowLeft, ArrowRight } from "lucide-react"
import './main.css'
import PropTypes from 'prop-types';

function ImageSlider({ imageUrls }) {
  const [imageIndex, setImageIndex] = useState(0)

  function showNextImage() {
    if (imageIndex == imageUrls.length - 1) return
    setImageIndex(current => current + 1)
  }
  function showPrevImage() {
    if (imageIndex == 0) return
    setImageIndex(current => current - 1)
  }
  function handleDotClick(e) {
    const siblings = e.target.parentElement.children
    const indexOfButton = Object.keys(siblings).find(key => siblings[key] === e.target);
    setImageIndex(Number(indexOfButton))
  }

  return (
    <div className='w-[650px] h-[100%] relative'>
      <button onClick={showPrevImage} className='hover:opacity-75 absolute z-10 m-4 top-[50%] translate-y-[-100%] text-white'><ArrowLeft /></button>
      <button onClick={showNextImage} className='hover:opacity-75 absolute z-10 m-4 top-[50%] translate-y-[-100%] text-white right-0'><ArrowRight /></button>
      <div className='flex w-[100%] h-[100%] overflow-hidden'>
        {imageUrls.map(imageUrl => (
          <img className='transition-all aspect-video w-[100%]' style={{translate: `${-650 * imageIndex}px`}} key={imageUrl} src={imageUrl} alt='car photo'/>
        ))}
      </div>
      <div className='flex absolute bottom-0 left-[50%] translate-x-[-50%] space-x-1.5 mb-2'>
        {imageUrls.map(imageUrl => (
          <button onClick={(e) => handleDotClick(e)} key={imageUrl} className='hover:opacity-75 bg-white rounded-full p-1'></button>
        ))}
      </div>
    </div>
  )
}

ImageSlider.propTypes = {
  imageUrls: PropTypes.array
}

export default ImageSlider
