// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import "./Cart.css"; // Updated CSS file import
import { StoreContext } from "../../context/StoreContext";
import { assets } from "../../assets/assets";

const Cart = () => {
  const {
    cartItems,
    food_list,
    removeFromCart,
    getTotalCartAmount,
    incrementQuantity,
    decrementQuantity,
  } = useContext(StoreContext);

  // State for promo code
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoMessage, setPromoMessage] = useState("");

  // Function to apply promo code
  const applyPromoCode = () => {
    if (promoCode.toUpperCase() === "AKSHAY") {
      setPromoApplied(true);
      setPromoMessage("Promo Code Applied!!");
    } else {
      setPromoApplied(false);
      setPromoMessage("Invalid Promo Code !!!");
    }
  };

  const calculateTotalAmount = () => {
    if (Object.keys(cartItems).length === 0) {
      return 0; // Return 0 if the cart is empty
    } else {
      return promoApplied ? getTotalCartAmount() : getTotalCartAmount() + 5;
    }
  };
  const totalAmount = calculateTotalAmount();
  const deliveryFees = promoApplied ? 0 : getTotalCartAmount() === 0 ? 0 : 5;

  const paymentHandler = async (e) => {
    const amount = totalAmount * 100;
    const currency = "INR";
    const receiptId = "qwsaq1";

    const response = await fetch("http://localhost:5001/order", {
      method: "POST",
      body: JSON.stringify({
        amount,
        currency,
        receipt: receiptId,
      }),
      headers: {
        "content-type": "application/json",
      },
    });
    const order = await response.json();
    console.log(order);

    var options = {
      key: "rzp_test_mat6Yl4N53bNuY",
      amount,
      currency,
      name: "GROCERY ",
      image: {},
      order_id: order.id,
      prefill: {
        name: "",
        email: "abc@example.com",
        contact: "+9100000000",
      },
      theme: {
        color: "#008000",
      },
      handler: function () {
        alert("Payment Successful\nOrder Placed\nOrder ID : 110456"),
          (window.location.href = "/success");
      },
    };

    var rzp1 = new window.Razorpay(options);

    rzp1.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });
    rzp1.open();
    e.preventDefault();
  };

  return (
    <>
      <div className="cart-container">
        <div className="cart-items-container">
          <div className="cart-items-title">
            <p>ITEMS</p>
            <p>TITLE</p>
            <p>PRICE</p>
            <p>QUANTITY</p>
            <p>TOTAL</p>
            <p>REMOVE</p>
          </div>
          <br />
          <hr />
          {food_list.map((item, index) => {
            if (cartItems[item._id] > 0) {
              return (
                <div key={index}>
                  <div className="cart-items-title cart-items-item">
                    <img src={item.image} alt="" />
                    <p>{item.name}</p>
                    <p>₹{item.price}</p>
                    <div className="quantity">
                      <img
                        src={assets.remove_icon_red}
                        alt="Remove"
                        onClick={() => decrementQuantity(item._id)}
                      />
                      <p>{cartItems[item._id]}</p>
                      <img
                        src={assets.add_icon_green}
                        alt="Add"
                        onClick={() => incrementQuantity(item._id)}
                      />
                    </div>
                    <p>₹{item.price * cartItems[item._id]}</p>
                    <p
                      onClick={() => removeFromCart(item._id)}
                      className="cross"
                    >
                      x
                    </p>
                  </div>
                  <hr />
                </div>
              );
            }
            return null;
          })}
        </div>
        <form
          className="place-order-form"
          onSubmit={(e) => {
            e.preventDefault();
            applyPromoCode();
          }}
        >
          <div className="place-order-left">
            <p className="title">DELIVERY INFORMATION</p>
            <div className="multi-fields">
              <input type="text" placeholder="First name" />
              <input type="text" placeholder="Last name" />
            </div>
            <input type="email" placeholder="Email address" />
            <input type="text" placeholder="Street" />
            <div className="multi-fields">
              <input type="text" placeholder="City" />
              <input type="text" placeholder="State" />
            </div>
            <div className="multi-fields">
              <input type="text" placeholder="Country" />
              <input type="text" placeholder="Zip Code" />
            </div>
            <input type="text" placeholder="Phone" />
          </div>
          <div className="place-order-right">
            <div className="cart-total-container">
              <div className="cart-promocode">
                <p>If you have a promo code, Enter it here</p>
                <div className="cart-promocode-input">
                  <input
                    type="text"
                    placeholder="Promo Code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                  />
                  <button onClick={applyPromoCode}>Apply</button>
                </div>
                <p
                  className={
                    promoApplied ? "promocode-applied" : "promocode-error"
                  }
                >
                  {promoMessage}
                </p>
                {promoApplied && (
                  <p className="enjoy-free-delivery">
                    Enjoy Your Free Delivery !!
                  </p>
                )}
              </div>
              <h2>Cart Totals</h2>
              <p className="COD">
                Cash on Delivery (COD) only for now. Apologies for any
                inconvenience.
              </p>
              <div>
                <div className="cart-total-details">
                  <p>Sub-total</p>
                  <p>₹{getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cart-total-details">
                  <p>Delivery Fee</p>
                  <p>₹{deliveryFees}</p>
                </div>
                <hr />
                <div className="cart-total-details">
                  <b>Total</b>
                  <b>₹{totalAmount}</b>
                </div>
              </div>
              <div className="payment-button">
                <button onClick={paymentHandler}>PLACE ORDER</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Cart;
