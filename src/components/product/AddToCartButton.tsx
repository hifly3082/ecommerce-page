import { useState } from 'react'
import { Cart, Minus, Plus } from '../icons'
import { Button } from '..'
import { addEndingToNumber } from '../../utils/utils'

export const AddToCartButton = () => {
  const [count, setCount] = useState(0)
  const productCount = count * 12

  const increase = () => {
    setCount((count) => count + 1)
  }

  const decrease = () => {
    setCount((count) => count - 1)
  }

  return count > 0 ? (
    <Button variant='counter'>
      <button onClick={decrease}>
        <Minus size={24} />
      </button>
      <span className='font-normal'>
        {productCount} {addEndingToNumber(productCount)}
      </span>
      <button onClick={increase}>
        <Plus size={24} />
      </button>
    </Button>
  ) : (
    <Button variant='button-full' onClick={increase}>
      <Cart /> В корзину
    </Button>
  )
}

export default AddToCartButton
