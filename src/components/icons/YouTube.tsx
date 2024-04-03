import { Icon } from '../../types'

export const YouTube: React.FC<Icon> = ({ size, fill }) => {
  return (
    <svg
      width={size || '24px'}
      height={size || '24px'}
      viewBox={`0 0 ${size} ${size}` || '0 0 24 24'}
      fill={fill || 'currentColor'}>
      <path d='M14.3864 4.72445C14.2348 4.17965 13.7803 3.74954 13.2045 3.599C12.1667 3.33377 8 3.33377 8 3.33377C8 3.33377 3.83333 3.33377 2.78788 3.599C2.21212 3.74237 1.76515 4.17248 1.60606 4.72445C1.33333 5.7137 1.33333 7.77822 1.33333 7.77822C1.33333 7.77822 1.33333 9.84273 1.61364 10.832C1.76515 11.3768 2.2197 11.8069 2.79545 11.9574C3.83333 12.2227 8 12.2227 8 12.2227C8 12.2227 12.1667 12.2227 13.2121 11.9574C13.7879 11.8141 14.2348 11.384 14.3939 10.832C14.6667 9.84273 14.6667 7.77822 14.6667 7.77822C14.6667 7.77822 14.6667 5.7137 14.3864 4.72445ZM6.63636 9.65635V5.90008L10.1212 7.77822L6.63636 9.65635Z' />
    </svg>
  )
}
export default YouTube
