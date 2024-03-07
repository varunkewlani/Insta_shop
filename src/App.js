import './App.css';
import Navbar from './components/Navbar';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import Home from './pages/Home';
import { Route, Routes } from 'react-router';
import { Login } from './pages/auth/Login';
import { Register } from './pages/auth/Register';
import { Forgotpassword } from './pages/auth/Forgotpassword';
import { Footer } from './components/Footer';
import { Shop } from './pages/Shop';
import { AdminDashboard } from './pages/AdminDashboard';
import { CreateCategory } from './pages/admin/category/CreateCategory';
import { CookiesProvider } from 'react-cookie';
import { UpdateCategory } from './pages/admin/category/UpdateCategory';
import { Categories } from './pages/Categories';
import { SingleProduct } from './pages/SingleProduct';
import {Cart} from './pages/Cart'
import { Checkout } from './pages/Checkout';
import { Delivered } from './pages/Delivered';
import { Youtube } from './pages/Youtube';
import { CreateBrand } from './pages/admin/brand/CreateBrand';
import { Orders } from './pages/Orders';


const App = () => {
  return (
    <>
      <CookiesProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/createcategory" element={<CreateCategory />}></Route>
          <Route path="/createbrand" element={<CreateBrand/>}/>
          <Route path="/updateCategory/:slug" element={<UpdateCategory />}></Route>
          <Route path="/shop" element={<Shop />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<Forgotpassword />} />
          <Route path="/singleproduct/:id/:category" element={<SingleProduct/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/delivered" element={<Delivered/>}/>
          <Route path="/youtube" element={<Youtube/>}/>
          <Route path="/orders" element={<Orders/>}/>
        </Routes>
        <Footer />
      </CookiesProvider>
    </>
  );
}

export default App;
