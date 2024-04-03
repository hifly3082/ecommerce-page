import { Close, Search } from './icons'

export const SearchBar = () => {
  return (
    <div className='flex w-full relative items-center'>
      <input
        type='text'
        className='flex-1 rounded-lg border-0 px-4 py-3 text-sm  text-[#050D23] ring-1 ring-inset ring-gray-300 placeholder:text-gray-400'
        placeholder='Название запроса'
      />
      <div className='absolute right-3'>
        <Search />
      </div>
      <div className='absolute right-12'>
        <Close />
      </div>
    </div>
  )
}

export default SearchBar
