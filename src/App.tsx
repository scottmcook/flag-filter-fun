import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query'
import NavBar from './components/NavBar/NavBar'
import SearchParams from './components/SearchParams/SearchParams'
import Details from "./components/Details/Details";

const queryClient = new QueryClient()

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <div className='bg-light-gray text-very-dark-blue-font dark:text-white dark:bg-dark-very-blue '>
          <NavBar />
        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<SearchParams />} />
        </Routes>
        </div>
      </QueryClientProvider>
    </BrowserRouter>
  )
}

export default App
