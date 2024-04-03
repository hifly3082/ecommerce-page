import { Footer, Header } from './components'
import { ProductDetails } from './components/product'

function App() {
  return (
    <main className='flex flex-col'>
      <Header />
      <ProductDetails />
      <Footer />
    </main>
  )
}

export default App
