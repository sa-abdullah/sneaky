import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './Pages/App.jsx'
import DisplayCartPage from './Pages/DisplayCart.jsx'
import AllProductsPage from './Pages/AllProductsPage.jsx'
import ProductDetail from './Pages/ProductDetail.jsx'
import { CartProvider } from './components/CartContext.jsx'
import { BrowserRouter, Routes, Route }from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <>
  <BrowserRouter>
    <CartProvider>
      <Routes>
          <Route path="/" element={<App />}/>
          <Route path="/cart" element={<DisplayCartPage />}/>
          <Route path="/products" element={<AllProductsPage />}/>
          <Route path="/detail/:id" element={<ProductDetail />}/>
      </Routes>
    </CartProvider>
  </BrowserRouter>
  </>
  
)


