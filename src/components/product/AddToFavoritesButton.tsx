import { useState } from 'react'
import { Heart, HeartFilled } from '../icons'

export const AddToFavoritesButton = () => {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(!clicked)
  }

  return (
    <button
      className='flex rounded-lg text-primary py-4 px-6 bg-ghost hover:text-danger'
      onClick={handleClick}>
      {clicked ? <HeartFilled size={24} fill={'#FF3D71'} /> : <Heart />}
    </button>
  )
}

export default AddToFavoritesButton
