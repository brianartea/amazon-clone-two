import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'

const Checkout = () => {
  //const [{ basket }, dispatch] = useStateValue();
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div>
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" src="https://expertdesign.cc/amazon-images/bg-1.jpg" alt="Advertisement" />

        <div>
          <h3 className="checkout__user">Hello, {user?.email}</h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>

          {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
      <div className="checkout__centerBottom">
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout
