const categories = [
  {
    name: 'Женщинам',
    sub: [
      { name: 'Одежда', href: '#' },
      { name: 'Обувь', href: '#' },
      { name: 'Аксессуары', href: '#' },
      { name: 'Белье', href: '#' },
      { name: 'Bra fitting', href: '#' }
    ]
  },
  {
    name: 'Мужчинам',
    sub: [
      { name: 'Одежда', href: '#' },
      { name: 'Обувь', href: '#' },
      { name: 'Аксессуары', href: '#' },
      { name: 'Белье', href: '#' }
    ]
  },
  {
    name: 'Детям',
    sub: [
      { name: 'Одежда', href: '#' },
      { name: 'Обувь', href: '#' },
      { name: 'Аксессуары', href: '#' },
      { name: 'Белье', href: '#' },
      { name: 'Игрушки', href: '#' },
      { name: 'Малыши', href: '#' }
    ]
  },
  {
    name: 'Виды спорта',
    sub: [
      { name: 'Велоспорт', href: '#' },
      { name: 'Туризм', href: '#' },
      { name: 'Тренажеры и фитнес', href: '#' },
      { name: 'Командные виды спорта', href: '#' },
      { name: 'Самокаты', href: '#' }
    ]
  }
]

export const Categories = () => {
  return (
    <div className='grid grid-cols-4 my-6'>
      {categories.map((category) => (
        <div key={category.name} className='flex flex-col'>
          <h4 className='mb-4'>{category.name}</h4>
          <div className='flex flex-col gap-4'>
            {category.sub.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className='text-sm font-light'>
                {item.name}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
export default Categories
