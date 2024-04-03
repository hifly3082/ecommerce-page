import { NumericFormat } from 'react-number-format'
import { Toggler } from '..'

const PRICE = 166534
const DISCOUNT = 15
const DISCOUNTED_PRICE = PRICE * (1 - DISCOUNT / 100)

export const Price: React.FC = () => {
  return (
    <div className='grid'>
      <p className='text-sm text-danger'>
        <NumericFormat
          displayType='text'
          value={PRICE}
          decimalScale={2}
          thousandSeparator=' '
          suffix={'.00 цена без скидки'}
        />
      </p>
      <p className='flex items-center'>
        <span className='text-[32px] font-semibold mr-4 pt-2 pb-4'>
          <NumericFormat
            displayType='text'
            value={DISCOUNTED_PRICE}
            decimalScale={0}
            thousandSeparator=' '
          />
          <span className='font-gotham'> ₽</span>
        </span>
        <span className='text-base font-semibold text-white bg-danger rounded-md py-0.5 px-2'>
          -{DISCOUNT}%
        </span>
      </p>
      <div className='flex items-center gap-4 text-sm'>
        <span className='text-text2 bg-blacksec rounded-md p-2'>
          12 штук в уп.
        </span>
        <Toggler />
        <span>Заказ упаковкой</span>
      </div>
    </div>
  )
}
export default Price
