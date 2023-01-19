import { Header } from './components/Header'
import { PageLoader } from './components/PageLoader'
import { Summary } from './components/SummaryTable'

function App() {
  return (
    <div className='relative'>
      <PageLoader />
      <div className='w-screen h-screen flex justify-center items-center'>
        <div className='w-full max-w-5xl px-6 flex flex-col gap-16'>

          <Header />
          <Summary />
        </div>
      </div>
    </div>
  )
}

export default App
