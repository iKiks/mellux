import react from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import ProtectedRoutes from './components/ProtectedRoutes'
import ProductList from './pages/ProductList'
import HomePage from './pages/HomePage'

function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/dashboard" element={
          <ProtectedRoutes>
            {/* <Dashboard /> */}
          </ProtectedRoutes>
        } />
        <Route path="/" element={ <HomePage /> } />
        <Route path="/products" element={ <ProductList /> } />

      </Routes>
    </BrowserRouter>
  )
}

export default App
