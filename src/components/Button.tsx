import clsx from 'clsx'
import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  variant: 'button' | 'button-full' | 'counter' | 'link' | 'icon' | 'disabled'
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  onClick
}) => {
  return (
    <button
      className={clsx(
        'rounded-lg text-sm flex shrink-0 justify-center items-center gap-3 font-bold transition-200',
        {
          'px-6 py-3 bg-primary text-white font-normal hover:shadow-button':
            variant === 'button',
          'bg-primary text-white font-normal flex-1 hover:shadow-button':
            variant === 'button-full',
          'flex-1 px-4 justify-between border-2 border-primary hover:shadow-counter':
            variant === 'counter',
          'px-6 py-3 bg-ghost text-primary font-semibold': variant === 'link',
          'text-light hover:text-primary': variant === 'icon',
          'text-disabled bg-bgdisabled': variant === 'disabled'
        }
      )}
      onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
