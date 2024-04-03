import { clsx } from 'clsx'

interface DividerProps {
  variant: 'horizontal' | 'vertical'
}

export const Divider: React.FC<DividerProps> = ({ variant }) => {
  return (
    <div
      className={clsx('border-divider self-stretch', {
        'border-t-[1px]': variant === 'horizontal',
        'border-r-[1px]': variant === 'vertical'
      })}></div>
  )
}
export default Divider
