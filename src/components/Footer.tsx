import { ReactElement } from 'react'
import { Camera, Info, Note, YouTube } from './icons'
import { Block, Button, Categories, Divider, Logo } from '.'

interface LinkI {
  icon?: ReactElement
  text: string
  href: string
}

const footerLinks = [
  { icon: <Note size={16} />, text: 'PDF презентация', href: '#' },
  { icon: <Camera size={16} />, text: 'Видео инструкция', href: '#' },
  { icon: <Info size={16} />, text: 'FAQ', href: '#' },
  { icon: <YouTube size={16} />, text: 'Мы на YouTube', href: '#' },
  { text: 'Политика конфиденциальности', href: '#' },
  { text: 'Лицензионное соглашение', href: '#' }
]

const FooterLink = ({ link }: { link: LinkI }) => {
  return (
    <p className='flex items-center gap-2 font-medium hover:text-primary transition duration-150 ease-in'>
      <span className='text-base'>{link.icon}</span>{' '}
      <a className='text-xs' href={link.href}>
        {link.text}
      </a>
    </p>
  )
}

export const Footer: React.FC = () => {
  return (
    <footer className='grid gap-4 px-6'>
      <Divider variant='horizontal' />
      <div className='flex justify-between my-6'>
        <div className='flex gap-[56px] items-center'>
          <Logo size='large' />
          <div className='flex gap-12'>
            <Block
              size='medium'
              label='Служба поддержки'
              description='8 800 841-95-95'
            />
            <Block
              size='medium'
              label='Служба поддержки'
              description='support@sport.ru'
            />
          </div>
        </div>
        <div className='flex gap-8 items-center'>
          <a href='#'>Вакансии</a>
          <a href='#'>Блог</a>
          <a href='#'>Акции</a>
          <Button variant='link'>Предложить идею</Button>
        </div>
      </div>

      <Divider variant='horizontal' />

      <Categories />

      <Divider variant='horizontal' />

      <div className='flex flex-col gap-10 py-8 text-secondary'>
        <div className='flex gap-6 justify-center'>
          {footerLinks.map((link) => (
            <FooterLink key={link.text} link={link} />
          ))}
        </div>
        <div className='text-center text-xs font-light text-text2'>
          Настоящая Политика обработки персональных данных разработана в
          соответствии с Конституцией Российской Федерации, Трудовым кодексом
          Российской Федерации, Гражданским кодексом Российской Федерации,
          Федеральным законом от 27 июля 2006 года 149-ФЗ "Об информации,
          информационных технологиях и о защите информации",
        </div>
        <div className='flex gap-4 justify-center items-center'>
          <Logo size='small' style='grey' />
          <p className='font-semibold text-sm'>Разработка платформы</p>
        </div>
      </div>
    </footer>
  )
}
export default Footer
