import { Button, Divider, Logo, Profile, SearchBar } from '.'
import { Cart, Contact, Favorites, List, Notifications, Percent } from './icons'

export const Header = () => {
  return (
    <header className='flex flex-col'>
      {/* TOP SECTION */}
      <div className='flex items-center gap-x-6 py-4 px-6 border-b-2 border-divider'>
        <Logo size='medium' />
        {/* MENU */}
        <Button variant='button'>
          <List />
          Меню
        </Button>
        {/* SEARCH */}
        <SearchBar />
        {/* NOTIFICATIONS */}
        <Button variant='icon'>
          <Notifications size={32} />
        </Button>

        <Divider variant='vertical' />
        {/* FAVORITES */}
        <Button variant='icon'>
          <Favorites size={32} />
        </Button>
        {/* CART */}
        <Button variant='link'>
          <Cart /> 144 235Р
        </Button>
        {/* USER PROFILE */}
        <Profile />
      </div>

      {/* BOTTOM SECTION */}
      <nav className='flex justify-between items-center text-sm py-2 px-6 border-b-2 border-divider'>
        <div className='flex gap-6'>
          <a href='#'>Мои заказы</a>
          <a href='#'>Сотрудники</a>
          <a href='#'>Шаблоны заказов</a>
          <a href='#'>Обращения</a>
        </div>
        <div className='flex gap-6 text-primary items-center'>
          <a
            href='#'
            className='flex items-center gap-2 bg-ghost px-3 py-2 rounded-[4px]'>
            <Contact size={16} />
            Ваш менеджер
          </a>
          <a href='#' className='flex items-center gap-4'>
            <Percent size={16} />
            Акции
          </a>
          <a href='#'>Блог</a>
        </div>
      </nav>
    </header>
  )
}
export default Header
