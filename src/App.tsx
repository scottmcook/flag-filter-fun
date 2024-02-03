import NavBar from './components/NavBar/NavBar'
import SearchParams from './components/SearchParams/SearchParams'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavBar />
      <SearchParams />
    </QueryClientProvider>
  )
}

export default App
