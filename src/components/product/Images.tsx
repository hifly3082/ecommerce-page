import productImg from '../../assets/images/Product-1.png'
import ImageSlider from './ImageSlider'

export const Images = () => {
  return (
    <div className='w-max'>
      <img
        className='object-cover w-full rounded-3xl'
        src={productImg}
        alt='Кроссовки мужские Skechers Sunny Dale'
      />
      <ImageSlider />
    </div>
  )
}
export default Images
