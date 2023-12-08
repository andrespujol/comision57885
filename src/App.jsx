import { ChakraProvider } from '@chakra-ui/react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import PageNotFound from './components/PageNotFound/PageNotFound'

function App() {

  return (
    <ChakraProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer title='Tienda'/>} />
          {/* definir la ruta para categorías */}
          {/* definir la ruta para el detalle */}
          <Route path={'/cart'} element={<h2>carrito</h2>}/>
          <Route path={'*'} element={<PageNotFound />}/>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>

  )
}

export default App
