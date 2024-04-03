import clsx from 'clsx'
import { Logo as LogoImg } from './icons'

interface LogoProps {
  size: 'small' | 'medium' | 'large'
  style?: 'grey'
}

export const Logo: React.FC<LogoProps> = ({ size, style }) => {
  return (
    <a
      href='#'
      className={clsx(
        'flex items-center text-text gap-2 tracking-tight select-none',
        {
          'text-[1.75rem]': size === 'small',
          'text-[2rem]': size === 'medium',
          'text-[2.75rem]': size === 'large',
          'text-text2': style === 'grey'
        }
      )}>
      <LogoImg
        size={Number(
          clsx({
            24: size === 'small',
            28: size === 'medium',
            40: size === 'large'
          })
        )}
        fill={style === 'grey' ? '#828EAD' : '#1551E5'}
      />
      <span className='font-semibold -translate-y-0.5'>compo</span>
    </a>
  )
}

export default Logo
