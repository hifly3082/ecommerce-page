import { CaretLeft, CaretRight } from '../icons'
import ProductImg from '../../assets/images/Product-1-0.png'
import ProductImg1 from '../../assets/images/Product-1-1.png'
import ProductImg2 from '../../assets/images/Product-1-2.png'
import ProductImg3 from '../../assets/images/Product-1-3.png'

const ImageSlider = () => {
  return (
    <div className='flex items-center justify-around gap-4 text-primary mt-6'>
      <button className='flex items-center justify-center rounded-lg bg-ghost px-2 py-4'>
        <CaretLeft size={32} />
      </button>
      <div className='flex gap-3'>
        <img
          src={ProductImg}
          alt='product'
          className='object-cover max-w-full rounded-xl'
        />
        <img
          src={ProductImg1}
          alt='product'
          className='object-cover max-w-full rounded-xl'
        />
        <img
          src={ProductImg2}
          alt='product'
          className='object-cover max-w-full rounded-xl hidden xl:block'
        />
        <img
          src={ProductImg3}
          alt='product'
          className='object-cover max-w-full rounded-xl hidden xxl:block'
        />
      </div>
      <button className='flex items-center justify-center rounded-lg bg-ghost px-2 py-4'>
        <CaretRight size={32} />
      </button>
    </div>
  )
}
export default ImageSlider
