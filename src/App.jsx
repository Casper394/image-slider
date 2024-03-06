import ImageSlider from './ImageSlider'
import car1 from './assets/images/car-1.jpg'
import car2 from './assets/images/car-2.jpg'
import car3 from './assets/images/car-3.jpg'
import car4 from './assets/images/car-4.jpg'
import car5 from './assets/images/car-5.jpg'


export default function App() {
  return (
    <div className='mx-auto w-[650px]'>
      <h1 className='text-4xl mb-12 mt-28 pb-6 border-b-2 border-black text-center'>Image Slider</h1>
      <ImageSlider imageUrls={[car1, car2, car3, car4, car5]} />
    </div>
  )
}
