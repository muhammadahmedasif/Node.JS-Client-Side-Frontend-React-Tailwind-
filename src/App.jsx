import './App.css';
import Header from './components/header';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Footer from './components/footer';
import ProductsListing from './pages/ProductsListing';
import ProductDetails from './pages/productdetails';
import { createContext, useState } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { RxCross2 } from "react-icons/rx";
import ProductZoom from './components/productzoom'
import ProductDescription from './components/Productdescription';
import Login from './pages/login';
import Register from './pages/Register';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import { FiDelete } from "react-icons/fi";
import ProductCart from './pages/cart';
import VerifyPassword from './pages/verifypassword';
import ConfirmPassword from './pages/confirmpassword';
import toast, { Toaster } from 'react-hot-toast';
import Checkout from './pages/checkout';
import MyAccount from './pages/myaccount';
import Mylist from './pages/mylist';
import MyOrders from './pages/myorders';

const Mycontext = createContext();
function App() {
  const [openproductdetailsmodal, setopenproductdetailsmodal] = useState(false);
  const [opencart, setopencart] = useState(false);
  const [isloggedin, setisloggedin] = useState(true)

  const handleCloseproductdetailsmodal = () => {
    setopenproductdetailsmodal(false);
  };

  
  const openalertbox = (status,msg)=>{
    if(status==='success')
      toast.success(msg);
    else
      toast.error('Error Occured')
  }
  const values = {
    setopenproductdetailsmodal,
    setopencart,
    openalertbox,
    isloggedin,
    setisloggedin,
  }


  const togglecart = (newvalue) => () => {
    setopencart(newvalue);

  };

  const DrawerList = (
    <Box sx={{ width: 400 }} role="presentation" >

      <div className='w-full bg-[#f8f6f6]'>

        <div className='flex bg-white items-center p-3 border-b border-gray-300 relative'>
          <h3 className='font-[600] text-[17px]'>
            Shopping Cart
          </h3>
          <Button className='!absolute right-3 hover:!bg-[rgba(123,122,122,0.2)] top-1/2 -translate-y-1/2 !text-[30px] !w-[45px] !h-[45px] !min-w-[45px] !text-black !rounded-full' onClick={togglecart(false)}>
            <RxCross2 />
          </Button>
        </div>

        <div className='w-full  bg-white pt-2 h-[360px] flex flex-col gap-2 mt-2 mb-1 overflow-hidden overflow-x-hidden overflow-y-scroll'>

          <div className='px-2 gap-3 w-full h-[150px] py-3 border-b border-gray-300 flex items-center  relative'>
            {/* Image Container */}
            <div className='w-[120px] h-[120px] p-2 flex items-center justify-center border border-gray-200'>
              <img
                src="https://i.pinimg.com/736x/9b/41/b8/9b41b8f952c7b7736937566c2d5bb3c3.jpg"
                alt="Shirt"
                className='object-contain max-h-full max-w-full'
              />
            </div>
            {/* Text Container */}
            <div className=' flex px-2 flex-col gap-1'>
              <h3 className='text-[14px] font-[600]'>
                Brown old money style T-shirt
              </h3>
              <h3 className='text-[13px] font-[500] text-black'>
                Qty : <span className='pl-1 font-[600] text-[13px]'>1</span>
              </h3>
              <h3 className='text-[13px] font-[500] text-black'>
                Price : <span className='pl-1 font-[600] text-[13px] text-[#ff5252]'>$19.1</span>
              </h3>
            </div>
            <Button className='!absolute top-1 right-3 !min-w-[40px] !h-[40px] !w-[40px] !text-black !text-[17px] !rounded-full'>
              <FiDelete className='' />
            </Button>
          </div>
          <div className='px-2 gap-3 w-full h-[150px] py-3 border-b border-gray-300 flex items-center  relative'>
            {/* Image Container */}
            <div className='w-[120px] h-[120px] p-2 flex items-center justify-center border border-gray-200'>
              <img
                src="https://i.pinimg.com/736x/9b/41/b8/9b41b8f952c7b7736937566c2d5bb3c3.jpg"
                alt="Shirt"
                className='object-contain max-h-full max-w-full'
              />
            </div>
            {/* Text Container */}
            <div className=' flex px-2 flex-col gap-1'>
              <h3 className='text-[14px] font-[600]'>
                Brown old money style T-shirt
              </h3>
              <h3 className='text-[13px] font-[500] text-black'>
                Qty : <span className='pl-1 font-[600] text-[13px]'>1</span>
              </h3>
              <h3 className='text-[13px] font-[500] text-black'>
                Price : <span className='pl-1 font-[600] text-[13px] text-[#ff5252]'>$19.1</span>
              </h3>
            </div>
            <Button className='!absolute top-1 right-3 !min-w-[40px] !h-[40px] !w-[40px] !text-black !text-[17px] !rounded-full'>
              <FiDelete className='' />
            </Button>
          </div>
          <div className='px-2 gap-3 w-full h-[150px] py-3 border-b border-gray-300 flex items-center  relative'>
            {/* Image Container */}
            <div className='w-[120px] h-[120px] p-2 flex items-center justify-center border border-gray-200'>
              <img
                src="https://i.pinimg.com/736x/9b/41/b8/9b41b8f952c7b7736937566c2d5bb3c3.jpg"
                alt="Shirt"
                className='object-contain max-h-full max-w-full'
              />
            </div>
            {/* Text Container */}
            <div className=' flex px-2 flex-col gap-1'>
              <h3 className='text-[14px] font-[600]'>
                Brown old money style T-shirt
              </h3>
              <h3 className='text-[13px] font-[500] text-black'>
                Qty : <span className='pl-1 font-[600] text-[13px]'>1</span>
              </h3>
              <h3 className='text-[13px] font-[500] text-black'>
                Price : <span className='pl-1 font-[600] text-[13px] text-[#ff5252]'>$19.1</span>
              </h3>
            </div>
            <Button className='!absolute top-1 right-3 !min-w-[40px] !h-[40px] !w-[40px] !text-black !text-[17px] !rounded-full'>
              <FiDelete className='' />
            </Button>
          </div>
          <div className='px-2 gap-3 w-full h-[150px] py-3 border-b border-gray-300 flex items-center  relative'>
            {/* Image Container */}
            <div className='w-[120px] h-[120px] p-2 flex items-center justify-center border border-gray-200'>
              <img
                src="https://i.pinimg.com/736x/9b/41/b8/9b41b8f952c7b7736937566c2d5bb3c3.jpg"
                alt="Shirt"
                className='object-contain max-h-full max-w-full'
              />
            </div>
            {/* Text Container */}
            <div className=' flex px-2 flex-col gap-1'>
              <h3 className='text-[14px] font-[600]'>
                Brown old money style T-shirt
              </h3>
              <h3 className='text-[13px] font-[500] text-black'>
                Qty : <span className='pl-1 font-[600] text-[13px]'>1</span>
              </h3>
              <h3 className='text-[13px] font-[500] text-black'>
                Price : <span className='pl-1 font-[600] text-[13px] text-[#ff5252]'>$19.1</span>
              </h3>
            </div>
            <Button className='!absolute top-1 right-3 !min-w-[40px] !h-[40px] !w-[40px] !text-black !text-[17px] !rounded-full'>
              <FiDelete className='' />
            </Button>
          </div>
          <div className='px-2 gap-3 w-full h-[150px] py-3 border-b border-gray-300 flex items-center  relative'>
            {/* Image Container */}
            <div className='w-[120px] h-[120px] p-2 flex items-center justify-center border border-gray-200'>
              <img
                src="https://i.pinimg.com/736x/9b/41/b8/9b41b8f952c7b7736937566c2d5bb3c3.jpg"
                alt="Shirt"
                className='object-contain max-h-full max-w-full'
              />
            </div>
            {/* Text Container */}
            <div className=' flex px-2 flex-col gap-1'>
              <h3 className='text-[14px] font-[600]'>
                Brown old money style T-shirt
              </h3>
              <h3 className='text-[13px] font-[500] text-black'>
                Qty : <span className='pl-1 font-[600] text-[13px]'>1</span>
              </h3>
              <h3 className='text-[13px] font-[500] text-black'>
                Price : <span className='pl-1 font-[600] text-[13px] text-[#ff5252]'>$19.1</span>
              </h3>
            </div>
            <Button className='!absolute top-1 right-3 !min-w-[40px] !h-[40px] !w-[40px] !text-black !text-[17px] !rounded-full'>
              <FiDelete className='' />
            </Button>
          </div>

        </div>
        <div className='border-t border-gray-300 bg-white h-[185px]'>
          <div className='px-2 py-5'>
            <h3 className='flex justify-between text-[14px] font-[600]'>6 items <span className='text-[#ff5252] text-[14px]'>$453.17</span></h3>
            <h3 className='flex justify-between text-[14px] font-[600]'>Shipping <span className='text-[#ff5252] text-[14px]'>$7.00</span></h3>
          </div>
          <div className='border-t border-gray-300 px-2 py-5'>
            <h3 className='flex justify-between text-[14px] font-[600]'>Total (tax excl.) <span className='text-[#ff5252] text-[14px]'>$460.17</span></h3>
            <h3 className='flex justify-between text-[14px] font-[600]'>Total (tax incl.) <span className='text-[#ff5252] text-[14px]'>$460.17</span></h3>
            <h3 className='flex justify-between text-[14px] font-[600]'>Taxes:<span className='text-[#ff5252] text-[14px]'>$0.00</span></h3>
          </div>
        </div>
        <div className='flex items-center justify-evenly w-full h-[50px] my-2'>

          <Button component={Link} to={'/cart'} className='button-org !min-w-[180px] !w-[180px] !h-[50px]' onClick={()=>setopencart(false)}>
            View Cart
          </Button>
          <Button component={Link} to = {'/checkout'} className='button-org !min-w-[180px] !w-[180px] !h-[50px]' onClick={()=>setopencart(false)}>
            checkout
          </Button>
        </div>

      </div>


    </Box>
  );

  return (
    <>
      <BrowserRouter>
        <Mycontext.Provider value={values}>
          <Header />
          <Routes>
            <Route path='/' exact={true} element={<Home />} />
            <Route path='/productslisting' exact={true} element={<ProductsListing />} />
            <Route path='/productdetails/:id' exact={true} element={<ProductDetails />} />
            <Route path='/login' exact={true} element={<Login />} />
            <Route path='/register' exact={true} element={<Register />} />
            <Route path='/cart' exact={true} element={<ProductCart />} />
            <Route path='/verifypassword' exact={true} element={<VerifyPassword />} />
            <Route path='/confirmpassword' exact={true} element={<ConfirmPassword />} />
            <Route path='/checkout' exact={true} element={<Checkout />} />
            <Route path='/myaccount' exact={true} element={<MyAccount />} />
            <Route path='/mylist' exact={true} element={<Mylist />} />
            <Route path='/myorders' exact={true} element={<MyOrders />} />
          </Routes>
          <Footer />
        </Mycontext.Provider>

        <Toaster />;

        {/* Dialogue model for zoom */}

        <Dialog
          fullWidth={true}
          maxWidth={'xl'}
          open={openproductdetailsmodal}
          onClose={handleCloseproductdetailsmodal}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>

            <div className='w-full relative'>
              <Button
                onClick={handleCloseproductdetailsmodal}
                className="!absolute !top-[0px] flex items-center !right-[2px] !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-[20px] !text-black !bg-[rgba(123,122,122,0.2)] hover:!bg-[#ff5252] hover:!text-white">
                <RxCross2 />
              </Button>
              <div className='w-full gap-4 flex h-[542px]'>

                <div className='w-[50%]'>
                  <ProductZoom slides={3} distance={23} images={['https://i.pinimg.com/736x/9b/41/b8/9b41b8f952c7b7736937566c2d5bb3c3.jpg', 'https://i.pinimg.com/736x/d0/13/2b/d0132bc46cb5efab47f4a03f5c3a42e3.jpg', 'https://i.pinimg.com/1200x/b7/34/80/b734804e1a8c6fd36279090b44d90324.jpg', 'https://i.pinimg.com/736x/8d/5e/95/8d5e951cc6951c61ad8c819efc7169d5.jpg', 'https://img.fantaskycdn.com/f100671d4d76264f245af4e078504c8a_750x.jpeg', 'https://i.pinimg.com/736x/9b/41/b8/9b41b8f952c7b7736937566c2d5bb3c3.jpg']} />
                </div>
                <ProductDescription />
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Drawer for cart */}

        <Drawer anchor='right' open={opencart} onClose={togglecart(false)}>
          {DrawerList}
        </Drawer>

      </BrowserRouter>

    </>
  )
}

export default App

export { Mycontext }