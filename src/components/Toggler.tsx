import clsx from 'clsx'
import { useState } from 'react'

interface TogglerProps {
  size?: 'medium' | 'large'
}

export const Toggler: React.FC<TogglerProps> = ({ size = 'medium' }) => {
  const [isToggled, setIsToggled] = useState(true)

  const handleCheckboxChange = () => {
    setIsToggled(!isToggled)
  }

  return (
    <label className='relative inline-flex cursor-pointer select-none items-center'>
      <input
        type='checkbox'
        className='sr-only'
        checked={isToggled}
        onChange={handleCheckboxChange}
      />
      <span
        className={clsx(
          'flex items-center rounded-full p-0.5 duration-200',
          { 'bg-primary': isToggled, 'bg-text2': !isToggled },
          {
            'h-[24px] w-[40px]': size === 'medium',
            'h-[32px] w-[48px]': size === 'large'
          }
        )}>
        <span
          className={clsx(
            'rounded-full bg-white duration-200',
            {
              'translate-x-4': isToggled
            },
            {
              'h-[20px] w-[20px]': size === 'medium',
              'h-[28px] w-[28px]': size === 'large'
            }
          )}></span>
      </span>
    </label>
  )
}
export default Toggler
