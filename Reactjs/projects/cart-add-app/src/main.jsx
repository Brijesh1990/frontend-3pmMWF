import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Layout from './Layout'
import ShopNow from './components/ShopNow'
import ContactUs from './components/ContactUs'
import LoginPage from './components/LoginApp'
import ProductsDetails from './components/ProductsDetails'
import ViewCart from './components/ViewCart'
import DeleteCart from './components/DeleteCart'
import CheckoutApp from './components/CheckoutApp'
// admin panel 
import AdminLogin from './components/admin/AdminLogin'
import AdminDashboard from './components/admin/AdminDashboard'
import AddProducts from './components/admin/AddProducts'
import AddCategory from './components/admin/AddCategory'
import ManageCategory from './components/admin/ManageCategory'
import DeleteCategory from './components/admin/DeleteCategory'
import EditCategory from './components/admin/EditCategory'
import ManageCustomers from './components/admin/ManageCustomers'
import ManageOrders from './components/admin/ManageOrders'
import ManageProducts from './components/admin/ManageProducts'

createRoot(document.getElementById('root')).render(
<StrictMode>
<Router>
<Routes>
<Route path="/" element={<Layout />} />
<Route path='/shop-now' element={<ShopNow />} />
<Route path='/products-details/:id' element={<ProductsDetails />} />
<Route path='/view-cart' element={<ViewCart />} />
<Route path='/view-cart/:id' element={<DeleteCart />} />
<Route path='/checkout-here' element={<CheckoutApp />} />
<Route path='/contact-us' element={<ContactUs />} />
<Route path='/login' element={<LoginPage />} />
<Route path='/admin-login' element={<AdminLogin />} />
<Route path='/admin-login/dashboard' element={<AdminDashboard />} />
<Route path='/admin-login/addcategory' element={<AddCategory />} />
<Route path='/admin-login/manage-category' element={<ManageCategory />} />
<Route path='/admin-login/delete-category/:id' element={<DeleteCategory />} />
<Route path='/admin-login/edit-category/:id' element={<EditCategory />} />

<Route path='/admin-login/addproducts' element={<AddProducts />} />
<Route path='/admin-login/manage-customers' element={<ManageCustomers />} />
<Route path='/admin-login/manage-orders' element={<ManageOrders />} />
<Route path='/admin-login/manageproducts' element={<ManageProducts />} />
</Routes>
</Router>
</StrictMode>,
)
