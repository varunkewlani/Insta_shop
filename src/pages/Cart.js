import React, { useEffect, useState } from 'react'
import "../assets/css/cart.css"
import { Link } from 'react-router-dom'
import axios from 'axios'


export const Cart = () => {

  const [cartList, setCartList] = useState([])
  const carturl = `${process.env.REACT_APP_API_URL}/cart`

  const cartListapi = () => {
    axios.get(carturl).then((res) => {
      setCartList(res.data)
    })
  }

  useEffect(() => {
    cartListapi()
  }, [])


  return (
    <div className='container'>
      <h2 className="hr-lines my-5 cart-heading text-center">SHOPPING CART </h2>
      <div className='row py-5'>
        <CartItems cartData={cartList} cartListapi={cartListapi} />
        <OrderSummary cartData={cartList} />
      </div>
    </div>
  )
}

const CartItems = ({ cartData, cartListapi }) => {

  const quantityurl = `${process.env.REACT_APP_API_URL}/cart`

  const handleCartDelete = (id) => {
    console.log(id, "mmmmmmmmmmmmmm");
    axios.delete(`${quantityurl}/${id}`).then((res) => {
      console.log("delete cart items", res)
      cartListapi();
    })
  }

  const handleUpdateQuantity = (quantity, data, id) => {
    const cartData = {
      data: data,
      quantity: quantity
    }

    axios.put(`${quantityurl}/${id}`, cartData)
      .then((res) => {
        console.log(res.data);
        cartListapi();
      })
      .catch((error) => {
        console.error('Error updating quantity:', error);
      });
  }

  return (
    <div className='col-md-6'>
      {cartData.length ? cartData.map((c, index) => {
        return (
          <div className='row'>
            <div className='col-1 fw-bold'>
              {index + 1}
            </div>
            <div className='col mb-3'>
              <div className='fs-6 fw-bold'> {c.data.title} </div>
              <div className='fs-6 my-1'><i className="fa-solid fa-fill-drip me-1"></i> <span className='border px-3 m-1' style={{ backgroundColor: `${c.data.color[1]}` }}> </span> <i className="fa-solid fa-up-right-and-down-left-from-center mx-2 my-2"></i>{c.data.size[1]}</div>
              <div className='fs-6 fw-bold my-1'> ${c.data.price} </div>
              <button className='btn p-0 border-0' onClick={() => handleCartDelete(c.id)}> <i className='text-danger my-2 fa-solid fa-trash'> </i>  </button>
            </div>
            <div className='col'>
              <button className='btn btn-outline-dark px-2 py-0' disabled={c.quantity <= 1 ? true : false} onClick={() => handleUpdateQuantity(c.quantity - 1, c.data, c.id)}>-</button>
              <span className='mx-2'> {c.quantity} </span>
              <button className='btn btn-outline-dark px-2 py-0' onClick={() => handleUpdateQuantity(c.quantity + 1, c.data, c.id)}>+</button>
            </div>
            <hr />
          </div>
        )
      }) : <div class="emptycart-centered-text fs-3 fw-bold text-secondary container">Empty Cart</div>
      }
    </div>
  )
}

const OrderSummary = ({ cartData }) => {
  const [subtotal, setSubtotal] = useState(0);
  const [productCount, setProductCount] = useState(0)
  const [showbtn, setShowbtn] = useState(false)
  const [gst, setGst] = useState(0)

  let totalQuantity = 0;

  useEffect(() => {
    if (cartData) {
      let total = 0;
      cartData.forEach((item) => {
        totalQuantity = totalQuantity + item.quantity;

        const itemTotal = item.data.price * item.quantity;
        total += itemTotal;
      });

      setProductCount(totalQuantity)
      setSubtotal(total);
      setGst((18 * total) / 100)
    }

    if (cartData.length === 0) {
      setShowbtn(false)
    } else {
      setShowbtn(true)
    }

  }, [cartData]);

  return (
    <div className='col-md-6'>
      <div className='container'>

        <div className='fs-5 fw-bold mb-4'> Order Summary</div>
        <div className='d-flex justify-content-between my-3'>
          <div className='fs-6 text-secondary'>Subtotal</div>
          {subtotal ? <div className='fs-6 text-dark'>{subtotal}</div> : <div> 0 </div>}
        </div>
        <hr />

        <div className='d-flex justify-content-between my-3'>
          <div className='fs-6 text-secondary'>Product Items</div>
          {productCount ? <div className='fs-6 text-dark'>{productCount} </div> : <div> 0 </div>}
        </div>
        <hr />

        <div className='d-flex justify-content-between my-3'>
          <div className='fs-6 text-secondary'>Tax estimate</div>
          <div className='fs-6 text-dark'>{gst}</div>
        </div>
        <hr />

        <div className='d-flex justify-content-between my-3'>
          <div className='fs-6 text-dark fw-bold'>Order Total</div>
          <div className='fs-6 text-text-dark fw-bold'>{subtotal + gst}</div>
        </div>

        <div className='d-flex justify-content-center my-3'>
          {showbtn ? <Link to="/delivered" disabled={showbtn ? false : true} className='btn text-center btn-dark rounded-4 my-3 px-5 py-2 w-auto'>Checkout</Link> : <button to="/checkout" disabled={showbtn ? false : true} className='btn text-center btn-dark rounded-4 my-3 px-5 py-2 w-auto'>Checkout</button>}

        </div>
      </div>
    </div>
  )
}