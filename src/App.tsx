import NavBar from './components/NavBar/NavBar'
import SearchParams from './components/SearchParams/SearchParams'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='bg-light-gray text-very-dark-blue-font dark:text-white dark:bg-dark-very-blue '>
        <NavBar />
        <SearchParams />
      </div>
    </QueryClientProvider>
  )
}

export default App
