import { AddToCartButton, AddToFavoritesButton, Images, Price } from '.'
import { Block, Breadcrumbs, Divider } from '..'

export const ProductDetails = () => {
  return (
    <section className='grid py-8 px-6 max-w-[1680px] xxxl:mx-auto'>
      <Breadcrumbs />
      <h2 className='uppercase text-[32px] pt-3 pb-6'>
        Кроссовки мужские Skechers Sunny Dale
      </h2>
      <div className='flex gap-8'>
        <div>
          <Images />
        </div>
        <div className='flex flex-col mt-4'>
          <div className='flex gap-24'>
            <div className='flex flex-col gap-6'>
              <Price />
              <Divider variant='horizontal' />
              <div className='flex gap-16'>
                <Block label='Доставка' description='Завтра' />
                <Block label='Тарасовка' description='7 шт.' />
                <Block label='Тарасовка' description='7 шт.' />
              </div>
              <div className='flex gap-4'>
                <AddToCartButton />
                <AddToFavoritesButton />
              </div>
            </div>
            <Divider variant='vertical' />
            <div>
              <div className='flex flex-col'>
                <h3 className='text-xl mb-8'>Характеристики</h3>
                <div className='flex justify-between'>
                  <div className='flex flex-col gap-6 w-[300px]'>
                    <Block label='Код поставщика' description='ELC00696' />
                    <Block label='Код РАЭК' description='ELC00696' />
                    <Block label='Бренд' description='Electric used' />
                    <Block
                      label='Код производителя'
                      description='ELC0200000696'
                    />
                  </div>
                  <div className='flex flex-col gap-6 w-[300px]'>
                    <Block label='Артикул' description='ELC0200000696' />
                    <Block label='Код ЕТМ' description='ELC00696' />
                    <Block label='Серия' description='ELC00696' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='mt-6'>
            <h3 className='font-medium text-2xl mb-6'>Описание товара</h3>
            <p className='font-light text-lg'>
              Создание приверженного покупателя специфицирует неопровержимый
              комплексный анализ ситуации. CTR существенно индуцирует из ряда
              вон выходящий SWOT-анализ. Воздействие на потребителя определяет
              возрастающий интеграл по поверхности, что известно даже
              школьникам. Отсюда естественно следует, что коммуникация
              уравновешивает косвенный фактор коммуникации. Поле направлений
              естественно допускает экспериментальный скачок функции, таким
              образом сбылась мечта идиота - утверждение полностью доказано.
              Арифметическая прогрессия притягивает линейно зависимый пул
              лояльных изданий.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default ProductDetails
