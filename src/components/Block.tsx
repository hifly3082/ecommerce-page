import clsx from 'clsx'

interface BlockProps {
  size?: 'small' | 'medium'
  label: string
  description: string
}

export const Block: React.FC<BlockProps> = ({
  size = 'small',
  label,
  description
}) => {
  return (
    <div className='flex flex-col gap-3'>
      <p
        className={clsx('font-sm font-semibold', {
          'text-sm': size === 'small',
          'text-base': size === 'medium'
        })}>
        {description}
      </p>
      <p className='font-light text-xs text-text2'>{label}</p>
    </div>
  )
}
export default Block
