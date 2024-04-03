import Avatar from '../assets/images/Avatar.png'
import { CaretDown } from './icons'

export const Profile = () => {
  return (
    <div className='flex shrink-0 items-center gap-4 cursor-pointer text-sm'>
      <img src={Avatar} alt='avatar' />
      Ермаков Е.
      <button className='text-primary'>
        <CaretDown />
      </button>
    </div>
  )
}
export default Profile
